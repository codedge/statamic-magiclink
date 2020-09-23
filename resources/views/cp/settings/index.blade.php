@extends('statamic::layout')
@section('title', Statamic::crumb(__('magiclink::cp.settings.settings'), __('MagicLink')))

@section('content')
    <header class="mb-3">
        <h1>{{ __('magiclink::cp.settings.headline') }}</h1>
        <p class="text-sm text-grey mb-2">
            {{ __('magiclink::cp.settings.configure_your_needs') }}
        </p>
    </header>

    <magiclink-settings
        method="patch"
        action="{{ cp_route('magiclink.update') }}"
        index-url="{{ cp_route('dashboard') }}"
        :initial-enabled="{{ Statamic\Support\Str::bool($enabled) }}"
        initial-expire-time="{{ $expireTime }}"
    ></magiclink-settings>


@endsection
