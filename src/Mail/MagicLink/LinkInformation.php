<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Mail\MagicLink;

use Codedge\MagicLink\MagicLink;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Statamic\Contracts\Auth\User;

final class LinkInformation extends Mailable implements ShouldQueue
{
    protected MagicLink $magicLink;
    protected User $user;

    public function __construct(MagicLink $magicLink, User $user)
    {
        $this->magicLink = $magicLink;
        $this->user = $user;
    }

    public function build()
    {
        return $this->subject(config('app.name').' - '.__('magiclink::cp.email.new_link_subject'))
                    ->markdown('magiclink::emails.new-login-link', [
                        'userName' => $this->user->name,
                        'magicLink' => $this->magicLink->getLink(),
                    ]);
    }
}
