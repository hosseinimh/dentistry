<?php

use App\Http\Controllers\Administrator\DashboardController;
use App\Http\Controllers\Administrator\ErrorController;
use App\Http\Controllers\Administrator\PatientFileController;
use App\Http\Controllers\Administrator\UserController;
use Illuminate\Support\Facades\Route;

// 'administrator' type users
Route::middleware(['auth:sanctum', 'auth.administrator'])->group(function () {
    Route::post('dashboard', [DashboardController::class, 'index']);

    Route::post('errors', [ErrorController::class, 'index']);

    Route::post('users', [UserController::class, 'index']);
    Route::post('users/show/{model}', [UserController::class, 'show']);
    Route::post('users/store', [UserController::class, 'store']);
    Route::post('users/update/{model}', [UserController::class, 'update']);
    Route::post('users/change_password/{model}', [UserController::class, 'changePassword']);

    Route::post('p_files/store', [PatientFileController::class, 'store']);
    Route::post('p_files/update_form_1/{model}', [PatientFileController::class, 'updateForm1']);
    Route::post('p_files/update_form_2/{model}', [PatientFileController::class, 'updateForm2']);
});
