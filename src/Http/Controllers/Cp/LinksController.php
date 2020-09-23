<?php

declare(strict_types=1);

namespace Codedge\MagicLink\Http\Controllers\Cp;

use Carbon\Carbon;
use Codedge\MagicLink\MagicLinkManager;
use Illuminate\Http\Request;
use Statamic\CP\Column;

final class LinksController extends BaseCpController
{
    protected MagicLinkManager $magicLinkManager;

    public function __construct(MagicLinkManager $magicLinkManager)
    {
        $this->authorize('view links');

        $this->magicLinkManager = $magicLinkManager;
    }

    public function index()
    {
        $links = $this->magicLinkManager->get()->map(function ($link) {
            $link['expire_time'] = Carbon::createFromTimestamp($link['expire_time'])->toDateTimeString();

            return $link;
        });

        return view('magiclink::cp.links.index', [
            'links' => $links,
            'columns' => [
                Column::make('email')->label(__('magiclink::cp.email.email')),
                Column::make('redirect_to')->label(__('magiclink::cp.links.redirect_to')),
                Column::make('expire_time')->label(__('magiclink::cp.links.expire_time')),
            ],
        ]);
    }
}
