<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Tests\CP\Links;

use Codedge\MagicLink\Tests\TestCase;

class LinksTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
        $this->signInAdmin();
    }

    /** @test */
    public function can_see_links()
    {
        $this->get(cp_route('magiclink.links.index'))
             ->assertSee(__('magiclinks::cp.links.links'))
             ->assertSee(__('magiclinks::cp.links.no_links'));
    }

    public function cannot_see_links_when_no_permissions()
    {
        $this->signInUser();

        $this->get(cp_route('magiclink.links.index'))
             ->assertUnauthorized();
    }
}
