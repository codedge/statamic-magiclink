<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Http\Controllers\Cp\Auth;

use Codedge\MagicLink\Http\Controllers\Cp\BaseCpController;
use Codedge\MagicLink\MagicLinkManager;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Statamic\Facades\User;

class MagicLinkLoginController extends BaseCpController
{
    protected MagicLinkManager $magicLinkManager;

    public function __construct(MagicLinkManager $magicLinkManager)
    {
        $this->magicLinkManager = $magicLinkManager;
    }

    public function login(Request $request)
    {
        abort_if(! $request->hasValidSignature(), 401, __('magiclink::web.magic_link_signature_invalid'));

        /*
         * This handles the login for registered users. If no user is found, then we're probably using
         * the protected content feature.
         */
        $user = User::findByEmail($request->get('user_email'));
        if($user !== null) {
            Auth::guard('web')->login($user);
        }

        $redirect = !empty($this->magicLinkManager->get()->get($request->get('user_email'))['redirect_to'])
                    ? $this->magicLinkManager->get()->get($request->get('user_email'))['redirect_to']
                    : cp_route(config('statamic-magiclink.url.redirect_on_success'));

        return redirect($redirect);
    }
}
