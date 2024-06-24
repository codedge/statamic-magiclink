<?php

use Codedge\MagicLink\Http\Controllers\Cp\SettingsController;
use Illuminate\Support\Facades\Route;

Route::prefix('magiclink/')->name('magiclink.')->group(function () {
    // Settings
    Route::get('/', [SettingsController::class, 'index'])->name('index');
    Route::patch('/update', [SettingsController::class, 'update'])->name('update');

    // Links
    Route::resource('links', LinksController::class)->only(['index', 'delete']);
});
