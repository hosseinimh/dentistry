<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Http\Requests\PatientFile\StorePatientFileRequest;
use App\Http\Requests\PatientFile\UpdatePatientFileForm1Request;
use App\Http\Requests\PatientFile\UpdatePatientFileForm2Request;
use App\Models\PatientFile as Model;
use App\Packages\JsonResponse;
use App\Services\PatientFileService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class PatientFileController extends Controller
{
    public function __construct(JsonResponse $response, public PatientFileService $service)
    {
        parent::__construct($response);
    }

    public function store(StorePatientFileRequest $request): HttpJsonResponse
    {
        return $this->onStore($this->service->store(
            $request->file_no,
            $request->first_visit_date,
            $request->name,
            $request->family,
            $request->national_no,
            $request->birth_date,
            $request->birth_place,
            $request->occupation,
            $request->gender,
            $request->maritial_status,
            $request->ethnicity,
            $request->education,
            $request->spouse_occupation,
            $request->spouse_relationship,
            $request->childrenNo,
            $request->tel,
            $request->mobile,
            $request->relative_mobile,
            $request->home_address,
            $request->work_address,
        ));
    }

    public function updateForm1(Model $model, UpdatePatientFileForm1Request $request): HttpJsonResponse
    {
        return $this->onUpdate($this->service->updateForm1(
            $model,
            $request->file_no,
            $request->first_visit_date,
            $request->name,
            $request->family,
            $request->national_no,
            $request->birth_date,
            $request->birth_place,
            $request->occupation,
            $request->gender,
            $request->maritial_status,
            $request->ethnicity,
            $request->education,
            $request->spouse_occupation,
            $request->spouse_relationship,
            $request->childrenNo,
            $request->tel,
            $request->mobile,
            $request->relative_mobile,
            $request->home_address,
            $request->work_address,
        ));
    }

    public function updateForm2(Model $model, UpdatePatientFileForm2Request $request): HttpJsonResponse
    {
        return $this->onUpdate($this->service->updateForm2(
            $model,
            $request->lesion_classification,
            $request->patient_referal,
            $request->special_lesion_classification,
            $request->chief_compliant,
            $request->chief_compliant_history,
            $request->time_interval,
            $request->referal_history,
            $request->treatment_history
        ));
    }
}
