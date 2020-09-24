<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

final class MagicLink
{
    const LOGIN_FORM_URL_SESSION_KEY = 'magic-link:login-form-url';
    const MAGIC_LINK_REDIRECT_TO = 'magic-link:redirect-to';

    public function handle(Request $request, Closure $next)
    {
        $previousUrl = url()->previous();
        $redirectTo = $previousUrl;

        if ($request->headers->get('referer')) {
            $previousUrl = $request->headers->get('referer');
            $redirectTo = $this->extractRedirect($request->headers->get('referer'));
        }

        Session::put(self::LOGIN_FORM_URL_SESSION_KEY, $previousUrl);
        Session::put(self::MAGIC_LINK_REDIRECT_TO, $redirectTo);

        return $next($request);
    }

    private function extractRedirect(string $url): string
    {
        $redirect = $url;

        preg_match('/redirect=(.*)/', $url, $matches);

        if (isset($matches[1]) && ! empty($matches[1])) {
            $redirect = $matches[1];
        }

        return $redirect;
    }
}
