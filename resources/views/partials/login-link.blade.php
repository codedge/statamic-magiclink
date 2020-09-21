<div class="w-full text-center mt-2">
    <a href="{{ route('magiclink.show-send-link-form')}}" class="forgot-password-link text-sm opacity-75 hover:opacity-100">
        <svg class="w-4 h-4 align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
        {{ __('magiclink::web.login_magic_link') }}
    </a>
</div>
