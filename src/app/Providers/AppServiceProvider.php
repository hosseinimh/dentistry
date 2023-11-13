<?php

namespace App\Providers;

use App\Constants\Theme;
use App\Http\Controllers\Administrator\DashboardController;
use App\Http\Controllers\Administrator\ErrorController;
use App\Http\Controllers\Administrator\NotificationController;
use App\Http\Controllers\Administrator\PatientFileController;
use App\Http\Controllers\Administrator\PatientFollowUpController;
use App\Http\Controllers\Administrator\RadiographicEvidenceController;
use App\Http\Controllers\Administrator\UserController;
use App\Http\Controllers\User\DashboardController as UserDashboardController;
use App\Http\Controllers\User\ErrorController as UserErrorController;
use App\Http\Controllers\User\NotificationController as UserNotificationController;
use App\Http\Controllers\User\PatientFileController as UserPatientFileController;
use App\Http\Controllers\User\PatientFollowUpController as UserPatientFollowUpController;
use App\Http\Controllers\User\RadiographicEvidenceController as UserRadiographicEvidenceController;
use App\Http\Controllers\User\UserController as UserUserController;
use App\Http\Resources\Error\ErrorResource;
use App\Http\Resources\Notification\NotificationResource;
use App\Http\Resources\PatientFile\PatientFileResource;
use App\Http\Resources\PatientFollowUp\PatientFollowUpResource;
use App\Http\Resources\RadiographicEvidence\RadiographicEvidenceResource;
use App\Http\Resources\User\UserResource;
use App\Packages\Helper;
use App\Packages\JsonResponse;
use App\Packages\Notification;
use App\Services\ErrorService;
use App\Services\NotificationService;
use App\Services\PatientFileService;
use App\Services\PatientFollowUpService;
use App\Services\RadiographicEvidenceService;
use App\Services\UserService;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

require_once __DIR__ . '/../../server-config.php';

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('helper', function () {
            return new Helper();
        });

        $this->app->bind('notification', function () {
            return new Notification();
        });
    }

    public function boot()
    {
        $this->app->bind('path.public', function () {
            return PUBLIC_PATH;
        });

        View::share('THEME', Theme::class);

        $this->app->bind(ErrorController::class, function ($app) {
            return new ErrorController(new JsonResponse(ErrorResource::class), $app->make(ErrorService::class));
        });

        $this->app->bind(UserErrorController::class, function ($app) {
            return new UserErrorController(new JsonResponse(ErrorResource::class), $app->make(ErrorService::class));
        });

        $this->app->bind(DashboardController::class, function ($app) {
            return new DashboardController($app->make(JsonResponse::class));
        });

        $this->app->bind(UserDashboardController::class, function ($app) {
            return new UserDashboardController($app->make(JsonResponse::class));
        });

        $this->app->bind(UserController::class, function ($app) {
            return new UserController(new JsonResponse(UserResource::class), $app->make(UserService::class));
        });

        $this->app->bind(UserUserController::class, function ($app) {
            return new UserUserController(new JsonResponse(UserResource::class), $app->make(UserService::class));
        });

        $this->app->bind(NotificationController::class, function ($app) {
            return new NotificationController(new JsonResponse(NotificationResource::class), $app->make(NotificationService::class));
        });

        $this->app->bind(UserNotificationController::class, function ($app) {
            return new UserNotificationController(new JsonResponse(NotificationResource::class), $app->make(NotificationService::class));
        });

        $this->app->bind(PatientFileController::class, function ($app) {
            return new PatientFileController(new JsonResponse(PatientFileResource::class), $app->make(PatientFileService::class));
        });

        $this->app->bind(UserPatientFileController::class, function ($app) {
            return new UserPatientFileController(new JsonResponse(PatientFileResource::class), $app->make(PatientFileService::class));
        });

        $this->app->bind(PatientFollowUpController::class, function ($app) {
            return new PatientFollowUpController(new JsonResponse(PatientFollowUpResource::class), $app->make(PatientFollowUpService::class));
        });

        $this->app->bind(UserPatientFollowUpController::class, function ($app) {
            return new UserPatientFollowUpController(new JsonResponse(PatientFollowUpResource::class), $app->make(PatientFollowUpService::class));
        });

        $this->app->bind(RadiographicEvidenceController::class, function ($app) {
            return new RadiographicEvidenceController(new JsonResponse(RadiographicEvidenceResource::class), $app->make(RadiographicEvidenceService::class));
        });

        $this->app->bind(UserRadiographicEvidenceController::class, function ($app) {
            return new UserRadiographicEvidenceController(new JsonResponse(RadiographicEvidenceResource::class), $app->make(RadiographicEvidenceService::class));
        });
    }
}
