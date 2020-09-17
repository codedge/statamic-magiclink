<?php

use Codedge\MagicLink\Http\Controllers\Cp\SettingsController;
use Illuminate\Support\Facades\Route;

Route::prefix('magiclink/')->name('magiclink.')->group(function () {
    Route::get('/', [SettingsController::class, 'index'])->name('index');
    Route::patch('/update', [SettingsController::class, 'update'])->name('update');
});
