<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Session;

final class MagicLink
{
    const LOGIN_FORM_ROUTE_NAME_SESSION_KEY = 'login-form-route-name';

    protected Router $router;

    public function __construct(Router $router)
    {
        $this->router = $router;
    }

    public function handle(Request $request, Closure $next)
    {
        $previousRoute = $request->create(url()->previous());

        if ($request->has('referer')) {
            $previousRoute = $request->create($request->get('referer'));
        }

        $previousRouteName = $this->router->getRoutes()->match($previousRoute)->getName();
        Session::put(self::LOGIN_FORM_ROUTE_NAME_SESSION_KEY, $previousRouteName);

        return $next($request);
    }
}
