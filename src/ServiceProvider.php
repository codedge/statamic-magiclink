<?php declare(strict_types=1);

namespace Codedge\MagicLink;

use Codedge\MagicLink\Events\LinkCreated;
use Codedge\MagicLink\Http\Controllers\Cp\Auth\LoginController;
use Codedge\MagicLink\Listeners\SendLinkNotification;
use Statamic\Facades\CP\Nav;
use Statamic\Facades\Permission;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Http\Controllers\CP\Auth\LoginController as StatamicLoginController;

final class ServiceProvider extends AddonServiceProvider
{
    protected $routes = [
        'cp' => __DIR__.'/../routes/cp.php',
        'web' => __DIR__.'/../routes/web.php',
    ];

    protected $stylesheets = [
        __DIR__ . '/../public/css/statamic-magiclink.css'
    ];

    protected $scripts = [
        __DIR__ . '/../public/js/statamic-magiclink.js'
    ];

    protected $listen = [
        LinkCreated::class => [
            SendLinkNotification::class
        ],
    ];

    protected $viewNamespace = 'magiclink';

    public function boot() {
        parent::boot();

        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'magiclink');

        $this->bootNavigation();
        $this->bootPermissions();

        if ($this->app->runningInConsole()) {
            // Publish config
            $this->publishes([
                __DIR__ . '/../config/config.php' => config_path('magiclink.php'),
            ], 'magiclink-config');
        }
    }

    public function register()
    {
        /*
         * Swap login controller to be able to inject custom template.
         */
        $this->app->bind(StatamicLoginController::class, LoginController::class);
    }

    private function bootNavigation(): void
    {
        Nav::extend(function ($nav) {
            $nav->create('MagicLink')
                ->icon('link')
                ->section('Tools')
                ->route('magiclink.index')
                ->can(auth()->user()->can('view settings'));
        });
    }

    private function bootPermissions(): void
    {
        $this->app->booted(function () {
            Permission::group('magiclink_general', __('magiclink::cp.permissions.settings'), function () {
                Permission::register('view settings', function (\Statamic\Auth\Permission $permission) {
                    $permission
                        ->label(__('magiclink::cp.permissions.view_settings'))
                        ->description(__('magiclink::cp.permissions.view_settings_description'));
                });
            });
        });
    }
}
