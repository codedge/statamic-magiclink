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

        $user = User::findByEmail($request->get('user_email'));
        Auth::guard('web')->login($user);

        return redirect(cp_route(config('statamic-magiclink.url.redirect_on_success')));
    }
}
