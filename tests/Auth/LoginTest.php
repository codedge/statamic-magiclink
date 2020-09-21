<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Tests;

class LoginTest extends TestCase
{
    /** @test */
    public function can_see_magic_link_link(): void
    {
        $this->get(cp_route('login'))
             ->assertSee('Send Magic Link')
             ->assertOk();
    }
}
