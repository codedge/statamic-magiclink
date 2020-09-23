<?php

declare(strict_types=1);

namespace Codedge\MagicLink;

use Carbon\Carbon;
use Illuminate\Support\Facades\URL;
use Statamic\Contracts\Auth\User;

final class MagicLink
{
    /**
     * Time, the link expires.
     */
    protected Carbon $expireTime;

    /**
     * Redirect to the page after a successful login. This is either the CP dashboard or a page with protected
     * content.
     */
    protected string $redirectTo;
    protected string $link;
    protected string $hash;
    protected User $user;

    public function __construct(User $user)
    {
        $this->expireTime = now()->addMinutes(config('statamic-magiclink.expire_time'));
        $this->redirectTo = config('statamic-magiclink.url.redirect_on_success');
        $this->user = $user;
    }

    public function setExpireTime(int $expireTime): self
    {
        $this->expireTime = now()->addMinutes($expireTime);

        return $this;
    }

    public function getExpireTime(): Carbon
    {
        return $this->expireTime;
    }

    public function setRedirectTo(string $redirect): self
    {
        $this->redirectTo = $redirect;

        return $this;
    }

    public function getRedirectTo(): string
    {
        return $this->redirectTo;
    }

    public function getHash(): string
    {
        return $this->hash;
    }

    public function getLink(): string
    {
        return $this->link;
    }

    public function generate(): self
    {
        $this->link = URL::temporarySignedRoute(
            'magiclink.login',
            $this->expireTime,
            [
                'hash'       => $this->generateHash(),
                'user_email' => $this->user->email(),
            ]
        );

        return $this;
    }

    private function generateHash(): string
    {
        $this->hash = sha1($this->user->email());

        return $this->hash;
    }
}
