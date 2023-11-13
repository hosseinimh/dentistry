<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Http\Requests\PatientFollowUp\StorePatientFollowUpRequest;
use App\Http\Requests\PatientFollowUp\UpdatePatientFollowUpRequest;
use App\Models\PatientFollowUp as Model;
use App\Models\PatientFile;
use App\Packages\JsonResponse;
use App\Services\PatientFollowUpService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class PatientFollowUpController extends Controller
{
    public function __construct(JsonResponse $response, public PatientFollowUpService $service)
    {
        parent::__construct($response);
    }

    public function store(PatientFile $patientFile, StorePatientFollowUpRequest $request): HttpJsonResponse
    {
        return $this->onStore($this->service->store(
            $patientFile->id,
            $request->date,
            $request->result
        ));
    }

    public function update(Model $model, UpdatePatientFollowUpRequest $request): HttpJsonResponse
    {
        return $this->onUpdate($this->service->update(
            $model,
            $request->date,
            $request->result,
        ));
    }

    public function delete(Model $model): HttpJsonResponse
    {
        return $this->onDelete($this->service->delete($model));
    }
}
