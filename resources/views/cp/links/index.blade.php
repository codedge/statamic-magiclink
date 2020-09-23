@extends('statamic::layout')
@section('title', Statamic::crumb(__('magiclink::cp.links.links'), __('MagicLink')))

@section('content')
    <header class="mb-3">
        <h1 class="flex-1">{{ __('magiclink::cp.links.links') }}</h1>
        <p class="text-sm text-grey mb-2">
        </p>
    </header>

    @unless($links->isEmpty())

        <magiclink-links-listing
            :initial-rows="{{ json_encode($links) }}"
            :columns="{{ json_encode($columns) }}"
            :endpoints="{}">
        ></magiclink-links-listing>

    @else

        <div class="card">
            {{ __('magiclink::cp.links.no_links') }}
        </div>

    @endunless
@endsection
