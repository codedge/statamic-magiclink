<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Http\Controllers;

use Codedge\MagicLink\Events\LinkCreated;
use Codedge\MagicLink\MagicLinkManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Statamic\Facades\User;

final class MagicLinkController extends BaseWebController
{
    private const LOGIN_FORM_REFERER_SESSION_KEY = 'login-form-referer';

    protected MagicLinkManager $magicLinkRepository;
    protected User $user;

    public function __construct(MagicLinkManager $magicLinkRepository)
    {
        $this->magicLinkRepository = $magicLinkRepository;
    }

    public function showSendLinkForm()
    {
        Session::put(self::LOGIN_FORM_REFERER_SESSION_KEY, \request()->headers->get('referer'));

        return view('magiclink::magiclink.send-link-form', [
            'referer' => Session::get('login-form-referer'),
        ]);
    }

    public function sendLink(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $user = User::findByEmail($request->email);

        if ($user !== null) {
             $link = $this->magicLinkRepository->createForUser($user)->generate();
             event(new LinkCreated($link, $user));
        }

        session()->flash('success', __('magiclink::web.address_exists_then_email'));

        return [
            'redirect' => Session::get(self::LOGIN_FORM_REFERER_SESSION_KEY),
        ];
    }
}
