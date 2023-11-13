<?php

namespace App\Http\Controllers\Administrator;

use App\Constants\ErrorCode;
use App\Constants\StoragePath;
use App\Constants\UploadedFile;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FileUploaderController;
use App\Http\Requests\RadiographicEvidence\StoreRadiographicEvidenceRequest;
use App\Http\Requests\RadiographicEvidence\UpdateRadiographicEvidenceRequest;
use App\Models\RadiographicEvidence as Model;
use App\Models\PatientFile;
use App\Packages\JsonResponse;
use App\Services\RadiographicEvidenceService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class RadiographicEvidenceController extends Controller
{
    public function __construct(JsonResponse $response, public RadiographicEvidenceService $service)
    {
        parent::__construct($response);
    }

    public function store(PatientFile $patientFile, StoreRadiographicEvidenceRequest $request): HttpJsonResponse
    {
        if ($result = $this->service->store($patientFile->id, $request->radiographic_evidence)) {
            $uploadResult = (new FileUploaderController(StoragePath::RADIOGRAPHIC_EVIDENCES_FILE))->uploadFile($result, $request, 'file', 'path', 4 * 1024 * 1024, ['image/jpeg', 'image/png']);
            if ($uploadResult !== UploadedFile::OK && $uploadResult !== UploadedFile::NOT_UPLOADED_ERROR) {
                $this->service->delete($result);
                return $this->onError(['_error' => __('general.uploaded_' . $uploadResult), '_errorCode' => ErrorCode::STORE_ERROR]);
            }
            return $this->onStore($result);
        }
        return $this->onError(['_error' => __('general.store_error'), '_errorCode' => ErrorCode::STORE_ERROR]);
    }

    public function update(Model $model, UpdateRadiographicEvidenceRequest $request): HttpJsonResponse
    {
        if ($result = $this->service->update($model, $request->radiographic_evidence)) {
            $uploadResult = (new FileUploaderController(StoragePath::RADIOGRAPHIC_EVIDENCES_FILE))->uploadFile($model, $request, 'file', 'path', 4 * 1024 * 1024, ['image/jpeg', 'image/png']);
            if ($uploadResult !== UploadedFile::OK && $uploadResult !== UploadedFile::NOT_UPLOADED_ERROR) {
                return $this->onError(['_error' => __('general.uploaded_' . $uploadResult), '_errorCode' => ErrorCode::UPDATE_ERROR]);
            }
            return $this->onUpdate($result);
        }
        return $this->onError(['_error' => __('general.update_error'), '_errorCode' => ErrorCode::UPDATE_ERROR]);
    }

    public function delete(Model $model): HttpJsonResponse
    {
        return $this->onDelete($this->service->delete($model));
    }
}
