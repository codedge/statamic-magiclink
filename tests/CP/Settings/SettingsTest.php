<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Tests\CP\Settings;

use Codedge\MagicLink\Repositories\SettingsRepository;
use Codedge\MagicLink\Tests\TestCase;

class SettingsTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->signInAdmin();
    }


    public function can_see_settings(): void
    {
        $this->get(cp_route('magiclink.index'))
             ->assertOk()
             ->assertSee(__('magiclink::cp.settings.ml_expire_time'))
             ->assertSee(__('magiclink::cp.settings.ml_enabled'));
    }

    /** @test */
    public function cannot_see_settings_with_no_permissions(): void
    {
        $this->signInUser();

        $this->get(cp_route('magiclink.index'))
             ->assertRedirect(cp_route('index'));
    }

    /** @test */
    public function can_update_settings_without_error(): void
    {
        $payload = [
            'enabled'    => true,
            'expireTime' => 999,
            'allowedAddresses' => [],
        ];

        $this->patch(cp_route('magiclink.update'), $payload)->assertOk();

        $this->get(cp_route('magiclink.index'))
             ->assertSee(999);
    }

    /** @test */
    public function cannot_update_settings_with_all_errors(): void
    {
        $payload = [
            'enabled'    => 123,
            'expireTime' => 'test',
            'allowedAddresses' => ['wrong'],
        ];

        $this->patch(cp_route('magiclink.update'), $payload)
             ->assertSessionMissing('success')
             ->assertSessionHasErrors(['enabled', 'expireTime', 'allowedAddresses.0']);
    }

    /** @test */
    public function cannot_update_settings_with_enabled_errors(): void
    {
        $payload = [
            'enabled'    => 123,
            'expireTime' => 30,
            'allowedAddresses' => [],
        ];

        $this->patch(cp_route('magiclink.update'), $payload)
             ->assertSessionHasErrors(['enabled']);

        $payload = [
            'expireTime' => 30,
        ];

        $this->patch(cp_route('magiclink.update'), $payload)
             ->assertSessionHasErrors(['enabled']);
    }

    /** @test */
    public function cannot_update_settings_with_expire_time_errors(): void
    {
        $payload = [
            'enabled'    => true,
            'expireTime' => 'test',
            'allowedAddresses' => [],
        ];

        $this->patch(cp_route('magiclink.update'), $payload)
             ->assertSessionHasErrors(['expireTime']);

        $payload = [
            'enabled' => true,
        ];

        $this->patch(cp_route('magiclink.update'), $payload)
             ->assertSessionHasErrors(['expireTime']);
    }

    /** @test */
    public function can_set_enabled_to_true_false(): void
    {
        $repository = $this->app->make(SettingsRepository::class);

        $payload = [
            'enabled'    => true,
            'expireTime' => 300,
            'allowedAddresses' => [],
        ];

        $this->patch(cp_route('magiclink.update'), $payload);
        $this->assertTrue($repository->isEnabled());

        $payload = [
            'enabled'    => false,
            'expireTime' => 300,
            'allowedAddresses' => [],
        ];

        $this->patch(cp_route('magiclink.update'), $payload);
        $this->assertFalse($repository->isEnabled());
    }

    /** @test */
    public function can_set_expireTime_to_values(): void
    {
        $repository = $this->app->make(SettingsRepository::class);

        $payload = [
            'enabled'    => true,
            'expireTime' => 300,
            'allowedAddresses' => [],
        ];

        $this->patch(cp_route('magiclink.update'), $payload);
        $this->assertEquals(300, $repository->expireTime());
    }
}
