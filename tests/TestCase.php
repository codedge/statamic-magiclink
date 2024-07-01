<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Tests;

use Codedge\MagicLink\ServiceProvider;
use Statamic\Facades\Role;
use Statamic\Facades\User;
use Statamic\Testing\AddonTestCase;

class TestCase extends AddonTestCase
{
    protected string $addonServiceProvider = ServiceProvider::class;

    protected function signInUser($permissions = []): \Statamic\Contracts\Auth\User
    {
        $role = Role::make()->handle('test')->title('Test')->addPermission($permissions)->save();

        $user = User::make();
        $user->id(1)->email('test@mail.de')->assignRole($role);
        $this->be($user);

        return $user;
    }

    protected function signInAdmin(): \Statamic\Contracts\Auth\User
    {
        $user = User::make();
        $user->id(1)->email('test@mail.de')->makeSuper();
        $this->be($user);

        return $user;
    }
}
