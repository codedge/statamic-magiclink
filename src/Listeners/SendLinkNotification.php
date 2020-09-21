<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Listeners;

use Codedge\MagicLink\Events\LinkCreated;
use Codedge\MagicLink\Mail\MagicLink\LinkInformation;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

final class SendLinkNotification implements ShouldQueue
{
    public function handle(LinkCreated $event)
    {
        Mail::to($event->user->email())->queue(
            new LinkInformation($event->magicLink, $event->user)
        );
    }
}
