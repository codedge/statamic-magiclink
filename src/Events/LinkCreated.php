<?php declare(strict_types=1);

namespace Codedge\MagicLink\Events;

use Codedge\MagicLink\MagicLink;
use Statamic\Contracts\Auth\User;

final class LinkCreated
{
    public MagicLink $magicLink;
    public User $user;

    public function __construct(MagicLink $magicLink, User $user)
    {
        $this->magicLink = $magicLink;
        $this->user = $user;
    }
}
