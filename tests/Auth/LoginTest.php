<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Tests;

use PHPUnit\Framework\Attributes\Test;

class LoginTest extends TestCase
{
    #[Test]
    public function can_see_magic_link_link(): void
    {
        $this->get(cp_route('login'))
             ->assertSee('Send Magic Link')
             ->assertOk();
    }
}
