<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Tests\MagicLink;

use Codedge\MagicLink\Events\LinkCreated;
use Codedge\MagicLink\Http\Middleware\MagicLink;
use Codedge\MagicLink\Mail\MagicLink\LinkInformation;
use Codedge\MagicLink\Tests\TestCase;
use Illuminate\Support\Facades\Mail;
use PHPUnit\Framework\Attributes\Test;
use Statamic\Facades\User;

class MagicLinkFormTest extends TestCase
{
    #[Test]
    public function can_show_magic_link_form(): void
    {
        $this->get(route('magiclink.show-send-link-form'))
             ->assertOk()
             ->assertSee(__('magiclink::web.back_to_classic_login'));
    }

    #[Test]
    public function cannot_get_link_for_invalid_address(): void
    {
        $payload = [
            'email' => 'wrong-email-format',
        ];

        $this->post(route('magiclink.send-link'), $payload)
             ->assertSessionHasErrors(['email']);

        $payload = [
            'email' => '',
        ];

        $this->post(route('magiclink.send-link'), $payload)
             ->assertSessionHasErrors(['email']);
    }

    #[Test]
    public function can_request_link_for_non_existing_but_allowed_domain_user(): void
    {
        $this->expectsEvents([LinkCreated::class]);
        $this->signInAdmin();

        $payload = [
            'enabled' => true,
            'expireTime' => 999,
            'allowedAddresses' => [],
            'allowedDomains' => ['larifari.test'],
        ];

        $this->patch(cp_route('magiclink.update'), $payload)->assertOk();

        $this->app->make('auth')->guard(null)->logout();

        $this->assertGuest();

        $payload = [
            'email' => 'test@larifari.test',
        ];

        $this->withSession([MagicLink::MAGIC_LINK_REDIRECT_TO => cp_route('dashboard')])
             ->post(route('magiclink.send-link'), $payload)
             ->assertOk()
             ->assertSessionHas('success', __('magiclink::web.address_exists_then_email'));
    }

    #[Test]
    public function can_request_link_for_non_existing_and_non_allowed_user(): void
    {
        $this->doesntExpectEvents([LinkCreated::class]);

        $payload = [
            'email' => 'i@donotexist.com',
        ];

        $this->post(route('magiclink.send-link'), $payload)
             ->assertOk()
             ->assertSessionHas('success', __('magiclink::web.address_exists_then_email'));
    }

    #[Test]
    public function can_request_link_for_existing_user(): void
    {
        $this->expectsEvents([LinkCreated::class]);

        $user = User::make();
        $user->id(99)->email('test@test.com');

        $payload = [
            'email' => 'test@test.com',
        ];

        $this->withSession([MagicLink::MAGIC_LINK_REDIRECT_TO => cp_route('dashboard')])
             ->post(route('magiclink.send-link'), $payload)
             ->assertOk()
             ->assertSessionHas('success', __('magiclink::web.address_exists_then_email'));
    }

    #[Test]
    public function can_sent_email_with_requested_link(): void
    {
        $user = User::make();
        $user->id(99)->email('test@test.com');

        $payload = [
            'email' => 'test@test.com',
        ];

        Mail::fake();
        Mail::assertNothingSent();

        $this->withSession([MagicLink::MAGIC_LINK_REDIRECT_TO => cp_route('dashboard')])
             ->post(route('magiclink.send-link'), $payload)
             ->assertOk()
             ->assertSessionHas('success', __('magiclink::web.address_exists_then_email'));

        Mail::assertQueued(LinkInformation::class, function (LinkInformation $mail) use ($user) {
            return $mail->hasTo($user->email());
        });
    }
}
