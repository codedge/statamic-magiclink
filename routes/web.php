<?php declare(strict_types=1);

use Codedge\MagicLink\Http\Controllers\Cp\Auth\MagicLinkLoginController;
use Codedge\MagicLink\Http\Controllers\MagicLinkController;
use Illuminate\Support\Facades\Route;

Route::prefix(config('statamic-magiclink.url.path'))->name('magiclink.')->group(function () {
    Route::get('/send-link', [MagicLinkController::class, 'showSendLinkForm'])->name('show-send-link-form');
    Route::post('/send-link', [MagicLinkController::class, 'sendLink'])->name('send-link');

    Route::get( 'login/{hash}', [MagicLinkLoginController::class, 'login'])->name('login');
});
