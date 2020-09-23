<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Http\Controllers;

use Codedge\MagicLink\Events\LinkCreated;
use Codedge\MagicLink\Http\Middleware\MagicLink;
use Codedge\MagicLink\MagicLinkManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Statamic\Facades\User;

final class MagicLinkController extends BaseWebController
{
    protected MagicLinkManager $magicLinkRepository;
    protected User $user;

    public function __construct(MagicLinkManager $magicLinkRepository)
    {
        $this->magicLinkRepository = $magicLinkRepository;
    }

    public function showSendLinkForm()
    {
        return view('magiclink::magiclink.send-link-form', [
            'referer' => route(Session::get(MagicLink::LOGIN_FORM_ROUTE_NAME_SESSION_KEY)),
        ]);
    }

    public function sendLink(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        $user = User::findByEmail($request->email);

        if ($user !== null) {
            $link = $this->magicLinkRepository->createForUser($user)
                                              ->redirectTo(Session::get(MagicLink::LOGIN_FORM_ROUTE_NAME_SESSION_KEY))
                                              ->generate();
            event(new LinkCreated($link, $user));
        }

        session()->flash('success', __('magiclink::web.address_exists_then_email'));

        return [
            'redirect' => route(Session::get(MagicLink::LOGIN_FORM_ROUTE_NAME_SESSION_KEY)),
        ];
    }
}
