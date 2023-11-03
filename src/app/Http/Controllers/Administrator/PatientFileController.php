<?php

namespace App\Http\Controllers\Administrator;

use App\Constants\StoragePath;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FileUploaderController;
use App\Http\Requests\PatientFile\StorePatientFileRequest;
use App\Http\Requests\PatientFile\UpdatePatientFileForm1Request;
use App\Http\Requests\PatientFile\UpdatePatientFileForm2Request;
use App\Http\Requests\PatientFile\UpdatePatientFileForm3Request;
use App\Http\Requests\PatientFile\UpdatePatientFileForm4Request;
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
            $request->children_no,
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
            $request->children_no,
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

    public function updateForm3(Model $model, UpdatePatientFileForm3Request $request): HttpJsonResponse
    {
        return $this->onUpdate($this->service->updateForm3(
            $model,
            $request->systemic_disease_history,
            $request->blood_disease_type,
            $request->hospitalization_reason,
            $request->continuing_drug,
            $request->weekly_drug,
            $request->cancer_type,
            $request->radiation_place,
            $request->pregnancy_week,
            $request->pregnancy_num,
            $request->pregnancy_rank,
            $request->ad_explanation,
            $request->sleep_status,
            $request->functional_capacity,
            $request->tobacco_use,
            $request->use_tobacco_duration,
            $request->use_tobacco_type,
            $request->drug_use,
            $request->use_drug_duration,
            $request->use_drug_type,
            $request->alcohol,
            $request->pulse,
            $request->body_temp,
            $request->blood_pressure,
            $request->resporate,
            $request->weight,
            $request->height,
            $request->bmi,
            $request->familial_history,
            $request->fca_type,
        ));
    }

    public function updateForm4(Model $model, UpdatePatientFileForm4Request $request): HttpJsonResponse
    {
        if ($request->dentition_file_action === 'deleted') {
            $this->service->removeDentitionFile($model);
        }
        if ($request->decidious_file_action === 'deleted') {
            $this->service->removeDecidiousFile($model);
        }
        (new FileUploaderController(StoragePath::PATIENT_FILE))->uploadFile($model, $request, 'dentition_file', 'dentition_file', 4 * 1024 * 1024, ['image/jpeg', 'image/png']);
        (new FileUploaderController(StoragePath::PATIENT_FILE))->uploadFile($model, $request, 'decidious_file', 'decidious_file', 4 * 1024 * 1024, ['image/jpeg', 'image/png']);
        return $this->onUpdate($this->service->updateForm4(
            $model,
            $request->face_assymetry,
            $request->face_pigmentation,
            $request->face_other_pathalogical,
            $request->neck_assymetry,
            $request->neck_ty_examination,
            $request->lymph_nodes,
            $request->tomporomandibular_joint,
            $request->other_signs_tmj_description,
            $request->intra_oral_examination,
            $request->retromolar_area,
            $request->gums,
            $request->toothless_ridge,
            $request->hard_soft_palate,
            $request->tongue_dorsal,
            $request->tongue_ventral,
            $request->tongue_pharyngeal,
            $request->neurological_changes,
            $request->salivary_grand_examination,
            $request->dental_changes_examination,
            $request->adult_dmft,
            $request->adult_d,
            $request->adult_m,
            $request->adult_t,
            $request->decidious_dmft,
            $request->decidious_d,
            $request->decidious_m,
            $request->decidious_t,
            $request->priodontal_examination,
            $request->bop,
            $request->radiographic_evidence,
            $request->paraclinical_evidence,
            $request->consultation_deps,
            $request->probable_diagnosis,
            $request->differntial_diagnosis,
            $request->difinitive_diagnosis,
            $request->systemic_considerations,
        ));
    }
}
