@inject('str', 'Statamic\Support\Str')
@extends('statamic::outside')
@section('body_class', 'rad-mode')
@section('title', __('magiclink::web.login_magic_link'))

@section('content')
    <div class="logo pt-7">
        @cp_svg('statamic-wordmark')
    </div>

    <div class="card auth-card mx-auto">
        <magiclink-send-link
            method="post"
            action="{{ route('magiclink.send-link') }}"
            initial-placeholder="{{ __('magiclink::web.email_address') }}"
        ></magiclink-send-link>
    </div>

    <div class="w-full text-center mt-2">
        <a class="text-white text-sm opacity-75 hover:opacity-100" href="{{ $referer }}">
            <svg class="w-4 h-4 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path>
            </svg>
            {{ __('magiclink::web.back_to_classic_login') }}
        </a>
    </div>
@endsection
