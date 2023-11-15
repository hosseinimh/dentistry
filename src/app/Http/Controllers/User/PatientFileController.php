<?php

namespace App\Http\Controllers\User;

use App\Exports\PatientFilesExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\PatientFile\IndexPatientFilesRequest;
use App\Packages\JsonResponse;
use App\Models\PatientFile as Model;
use App\Services\PatientFileService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;
use Maatwebsite\Excel\Excel;

class PatientFileController extends Controller
{
    public function __construct(JsonResponse $response, public PatientFileService $service)
    {
        parent::__construct($response);
    }

    public function index(IndexPatientFilesRequest $request): HttpJsonResponse
    {
        return $this->onItems(
            $this->service->getPaginate(
                $request->file_no,
                $request->name,
                $request->family,
                $request->birth_date,
                $request->lesion_classification,
                $request->special_lesion_classification,
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
                $request->probable_diagnosis,
                $request->difinitive_diagnosis,
                $request->final_treatment_plan,
                $request->assistant,
                $request->master,
                $request->_pn,
                $request->_pi
            ),
            $this->service->count(
                $request->file_no,
                $request->name,
                $request->family,
                $request->birth_date,
                $request->lesion_classification,
                $request->special_lesion_classification,
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
                $request->probable_diagnosis,
                $request->difinitive_diagnosis,
                $request->final_treatment_plan,
                $request->assistant,
                $request->master,
            )
        );
    }

    public function show(Model $model): HttpJsonResponse
    {
        return $this->onItem($this->service->get($model->id));
    }

    public function excel(IndexPatientFilesRequest $request, Excel $excel)
    {
        $patientFileExport = new PatientFilesExport(
            $request->file_no,
            $request->name,
            $request->family,
            $request->birth_date,
            $request->lesion_classification,
            $request->special_lesion_classification,
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
            $request->probable_diagnosis,
            $request->difinitive_diagnosis,
            $request->final_treatment_plan,
            $request->assistant,
            $request->master,
        );
        return $excel->download($patientFileExport, 'patient_files.xlsx');
    }
}
