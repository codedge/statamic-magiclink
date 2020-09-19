<?php declare(strict_types=1);

namespace Codedge\MagicLink\Tests\MagicLink;

use Codedge\MagicLink\Tests\TestCase;

class MagicLinkFormTest extends TestCase
{
    /** @test */
    public function can_show_magic_link_form(): void
    {
        $this->get(route('magiclink.show-send-link-form'))
             ->assertOk()
             ->assertSee(__('magiclink::web.back_to_classic_login'));
    }

    /** @test */
    public function cannot_get_link_for_invalid_address(): void
    {
        $payload = [
            'email' => 'wrong-email-format'
        ];

        $this->post(route('magiclink.send-link'), $payload)
             ->assertSessionHasErrors(['email']);

        $payload = [
            'email' => ''
        ];

        $this->post(route('magiclink.send-link'), $payload)
             ->assertSessionHasErrors(['email']);
    }

//    /** @test */
//    public function can_request_link_for_non_existing_user(): void
//    {
//        $payload = [
//            'email' => 'john@doe.com'
//        ];
//
//        $this->post(route('magiclink.send-link'), $payload)->assertOk();
//
//
//    }

}
