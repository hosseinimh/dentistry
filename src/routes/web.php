<?php

use App\Http\Controllers\User\PatientFileController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::get('panel/users/logout', [UserController::class, 'logout']);
Route::get('panel/excel/p_files', [PatientFileController::class, 'excel']);

Route::get('{path}', function () {
    return view('index');
})->where('path', '^((?!api).)*$');
