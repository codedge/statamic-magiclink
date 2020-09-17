@component('mail::message')
Hey {{ $userName }},

click on the button below to login to {{ config('app.name') }}s Control Panel.

@component('mail::button', ['url' => $magicLink])
{{__('Login')}}
@endcomponent

Best,<br>
{{ config('app.name') }}
@endcomponent
