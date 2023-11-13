<?php

use App\Http\Controllers\Administrator\DashboardController;
use App\Http\Controllers\Administrator\ErrorController;
use App\Http\Controllers\Administrator\PatientFileController;
use App\Http\Controllers\Administrator\PatientFollowUpController;
use App\Http\Controllers\Administrator\RadiographicEvidenceController;
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
    Route::post('p_files/update_form_3/{model}', [PatientFileController::class, 'updateForm3']);
    Route::post('p_files/update_form_4/{model}', [PatientFileController::class, 'updateForm4']);
    Route::post('p_files/delete/{model}', [PatientFileController::class, 'delete']);

    Route::post('p_f_ups/store/{patientFile}', [PatientFollowUpController::class, 'store']);
    Route::post('p_f_ups/update/{model}', [PatientFollowUpController::class, 'update']);
    Route::post('p_f_ups/delete/{model}', [PatientFollowUpController::class, 'delete']);

    Route::post('r_evidences/store/{patientFile}', [RadiographicEvidenceController::class, 'store']);
    Route::post('r_evidences/update/{model}', [RadiographicEvidenceController::class, 'update']);
    Route::post('r_evidences/delete/{model}', [RadiographicEvidenceController::class, 'delete']);
});
