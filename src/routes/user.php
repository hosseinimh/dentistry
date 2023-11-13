<?php

use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\ErrorController;
use App\Http\Controllers\User\NotificationController;
use App\Http\Controllers\User\PatientFileController;
use App\Http\Controllers\User\PatientFollowUpController;
use App\Http\Controllers\User\RadiographicEvidenceController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

// all users
Route::middleware(['cors'])->group(function () {
    Route::post('users/logout', [UserController::class, 'logout']);

    Route::post('errors/store', [ErrorController::class, 'store']);
});

// not logged in users
Route::middleware(['cors', 'auth.notLoggedIn'])->group(function () {
    Route::post('users/login', [UserController::class, 'login']);
});

// 'user' type users
Route::middleware(['auth:sanctum', 'auth.user'])->group(function () {
    Route::post('dashboard', [DashboardController::class, 'index']);
});

// 'user' | 'administrator' type users
Route::middleware(['auth:sanctum', 'auth.logged'])->group(function () {
    Route::post('users/auth', [UserController::class, 'showAuth']);
    Route::post('users/change_password', [UserController::class, 'changePassword']);

    Route::post('notifications', [NotificationController::class, 'index']);
    Route::post('notifications/review', [NotificationController::class, 'review']);
    Route::post('notifications/seen/{model}', [NotificationController::class, 'seen']);
    Route::post('notifications/seen_review', [NotificationController::class, 'seenReview']);

    Route::post('p_files', [PatientFileController::class, 'index']);
    Route::post('p_files/show/{model}', [PatientFileController::class, 'show']);

    Route::post('p_f_ups/{patientFile}', [PatientFollowUpController::class, 'index']);
    Route::post('p_f_ups/show/{model}', [PatientFollowUpController::class, 'show']);

    Route::post('r_evidences/{patientFile}', [RadiographicEvidenceController::class, 'index']);
    Route::post('r_evidences/show/{model}', [RadiographicEvidenceController::class, 'show']);
});
