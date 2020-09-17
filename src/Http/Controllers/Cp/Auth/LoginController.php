<?php declare(strict_types=1);

namespace Codedge\MagicLink\Http\Controllers\Cp\Auth;

use Codedge\MagicLink\Repositories\SettingsRepository;
use Illuminate\Http\Request;
use Statamic\Facades\OAuth;
use Statamic\Http\Controllers\CP\Auth\LoginController as StatamicLoginController;

class LoginController extends StatamicLoginController
{
    protected SettingsRepository $settingsRepository;

    public function __construct(SettingsRepository $settingsRepository)
    {
        parent::__construct();

        $this->settingsRepository = $settingsRepository;
    }

    public function showLoginForm(Request $request)
    {
        if(!$this->settingsRepository->isEnabled()) {
            return parent::showLoginForm($request);
        }

        $data = [
            'title' => __('Log in'),
            'oauth' => $enabled = OAuth::enabled(),
            'providers' => $enabled ? OAuth::providers() : [],
            'referer' => $this->getReferrer(),
            'hasError' => $this->hasError(),
        ];

        $view = view('magiclink::auth.login', $data);

        if ($request->expired) {
            return $view->withErrors(__('Session Expired'));
        }

        return $view;
    }

    private function hasError()
    {
        return function ($field) {
            if (! $error = optional(session('errors'))->first($field)) {
                return false;
            }

            return ! in_array($error, [
                __('auth.failed'),
                __('statamic::validation.required'),
            ]);
        };
    }
}
