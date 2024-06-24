<?php

declare(strict_types=1);

namespace Codedge\MagicLink;

use Codedge\MagicLink\Events\LinkCreated;
use Codedge\MagicLink\Http\Controllers\Cp\Auth\LoginController;
use Codedge\MagicLink\Listeners\SendLinkNotification;
use Codedge\MagicLink\Repositories\SettingsRepository;
use Illuminate\Filesystem\Filesystem;
use Statamic\Facades\CP\Nav;
use Statamic\Facades\Permission;
use Statamic\Http\Controllers\CP\Auth\LoginController as StatamicLoginController;
use Statamic\Providers\AddonServiceProvider;

final class ServiceProvider extends AddonServiceProvider
{
    protected $routes = [
        'cp'  => __DIR__.'/../routes/cp.php',
        'web' => __DIR__.'/../routes/web.php',
    ];

    protected $stylesheets = [
        __DIR__.'/../public/css/statamic-magiclink.css',
    ];

    protected $scripts = [
        __DIR__.'/../public/js/statamic-magiclink.js',
    ];

    protected $tags = [
        \Codedge\MagicLink\Tags\Magiclink::class,
    ];

    protected $listen = [
        LinkCreated::class => [
            SendLinkNotification::class,
        ],
    ];

    protected $middlewareGroups = [
        'magic-link' => [
            \Codedge\MagicLink\Http\Middleware\MagicLink::class,
        ],
    ];

    protected $viewNamespace = 'magiclink';

    public function boot()
    {
        parent::boot();

        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'magiclink');

        $this->bootNavigation();
        $this->bootPermissions();

        if ($this->app->runningInConsole()) {
            // Publish config
            $this->publishes([
                __DIR__.'/../config/config.php' => config_path('statamic-magiclink.php'),
            ], 'magiclink-config');

            //Publish views
            $this->publishes([
                __DIR__.'/../resources/views' => resource_path('views/vendor/statamic-magiclink/views'),
            ], 'magiclink-views');
        }
    }

    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/config.php', 'statamic-magiclink');

        /*
         * Swap login controller to be able to inject custom template.
         */
        $this->app->bind(StatamicLoginController::class, LoginController::class);

        $this->app->bind(SettingsRepository::class, function () {
            return new SettingsRepository(new Filesystem());
        });

        $this->app->bind(MagicLinkManager::class, function () {
            return new MagicLinkManager(new Filesystem(), resolve(SettingsRepository::class));
        });
    }

    private function bootNavigation(): void
    {
        Nav::extend(function ($nav) {
            $nav->create('MagicLink')
                ->icon('link')
                ->section('Tools')
                ->route('magiclink.index')
                ->can('view magiclink settings')
                ->children([
                    Nav::item(__('magiclink::cp.links.links'))->route('magiclink.links.index')
                                                              ->can('view links'),
                ]);
        });
    }

    private function bootPermissions(): void
    {
        $this->app->booted(function () {
            Permission::group('magiclink_general', __('magiclink::cp.permissions.settings'), function () {
                Permission::register('view magiclink settings', function (\Statamic\Auth\Permission $permission) {
                    $permission
                        ->label(__('magiclink::cp.permissions.view_settings'))
                        ->description(__('magiclink::cp.permissions.view_settings_description'));
                });
                Permission::register('view links', function (\Statamic\Auth\Permission $permission) {
                    $permission
                        ->label(__('magiclink::cp.permissions.view_links'))
                        ->description(__('magiclink::cp.permissions.view_links_description'));
                });
            });
        });
    }
}
