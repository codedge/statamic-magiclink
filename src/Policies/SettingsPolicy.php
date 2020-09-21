<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Statamic\Auth\User;

final class SettingsPolicy
{
    use HandlesAuthorization;

    public function index(User $user)
    {
        return $user->hasPermission('view settings');
    }
}
