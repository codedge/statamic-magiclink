<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Time before the link expires
    |--------------------------------------------------------------------------
    |
    | Specify for how long the magic link is valid.
    | Default: 30 minutes
    |
    */
    'expire_time' => env('MAGICLINK_EXPIRE_TIME', 30),

    'url' => [
        /*
        |--------------------------------------------------------------------------
        | Path to validate the token
        |--------------------------------------------------------------------------
        |
        | Specify the path for validating the login link
        | Default: sml (Statamic Magic Link)
        |
        */
        'path' => 'sml/',

        /*
        |--------------------------------------------------------------------------
        | Route name where to redirect
        |--------------------------------------------------------------------------
        |
        | Here you may specify the name of the path you'd like to use after a
        | successful login.
        |
        | Default: CP dashboard
        */
        'redirect_on_success' => 'dashboard',
    ],
];
