<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Http\Controllers;

use Codedge\MagicLink\Events\LinkCreated;
use Codedge\MagicLink\Http\Middleware\MagicLink;
use Codedge\MagicLink\MagicLinkManager;
use Codedge\MagicLink\Repositories\SettingsRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Statamic\Facades\User;

final class MagicLinkController extends BaseWebController
{
    protected MagicLinkManager $magicLinkRepository;
    protected SettingsRepository $settingsRepository;
    protected User $user;

    public function __construct(MagicLinkManager $magicLinkRepository, SettingsRepository $settingsRepository)
    {
        $this->magicLinkRepository = $magicLinkRepository;
        $this->settingsRepository = $settingsRepository;
    }

    public function showSendLinkForm()
    {
        return view('magiclink::magiclink.send-link-form', [
            'referer' => Session::get(MagicLink::LOGIN_FORM_URL_SESSION_KEY),
        ]);
    }

    public function sendLink(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $user = $this->prepareUser($request);

        if (null !== $user) {
            $link = $this->magicLinkRepository->createForUser($user)
                                              ->redirectTo(Session::get(MagicLink::MAGIC_LINK_REDIRECT_TO))
                                              ->generate();

            event(new LinkCreated($link, $user));
        }

        session()->flash('success', __('magiclink::web.address_exists_then_email'));

        return [
            'redirect' => Session::get(MagicLink::LOGIN_FORM_URL_SESSION_KEY),
        ];
    }

    private function prepareUser(Request $request): ?\Statamic\Contracts\Auth\User
    {
        $user = User::findByEmail($request->email);

        /*
         * Special check for protected content, when no CP user exists.
         */
        if ($user === null) {
            if($this->magicLinkRepository->validAddress($request->email)) {
                $user = (User::make())->email($request->email);
            }
        }

        return $user;
    }
}
