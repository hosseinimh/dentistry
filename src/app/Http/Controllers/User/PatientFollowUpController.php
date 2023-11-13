<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\PatientFollowUp\IndexPatientFollowUpsRequest;
use App\Http\Resources\PatientFile\PatientFileResource;
use App\Http\Resources\PatientFollowUp\PatientFollowUpResource;
use App\Models\PatientFile;
use App\Packages\JsonResponse;
use App\Models\PatientFollowUp as Model;
use App\Services\PatientFileService;
use App\Services\PatientFollowUpService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class PatientFollowUpController extends Controller
{
    public function __construct(JsonResponse $response, public PatientFollowUpService $service)
    {
        parent::__construct($response);
    }

    public function index(PatientFile $patientFile, IndexPatientFollowUpsRequest $request): HttpJsonResponse
    {
        $items = PatientFollowUpResource::collection($this->service->getPaginate($patientFile->id, $request->_pn, $request->_pi));
        $patientFile = new PatientFileResource($patientFile);
        $data = ['items' => $items, 'patientFile' => $patientFile];
        return $this->onItems($data, $this->service->count($patientFile->id));
    }

    public function show(Model $model): HttpJsonResponse
    {
        $patientFileService = new PatientFileService();
        $item = new PatientFollowUpResource($model);
        $patientFile = new PatientFileResource($patientFileService->get($item->patient_file_id));
        $data = ['item' => $item, 'patientFile' => $patientFile];
        return $this->onOk($data);
    }
}
