<?php

namespace App\Http\Requests\PatientFile;

use App\Constants\ErrorCode;
use App\Constants\LesionClassification;
use App\Constants\SpecialLesionClassification;
use App\Constants\SystemicDiseaseHistory;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Closure;

class IndexPatientFilesRequest extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::FORM_INPUT_INVALID], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
            'file_no' => 'max:50',
            'name' => 'max:50',
            'family' => 'max:50',
            'birth_date' => 'sometimes|numeric|gte:13000101',
            'lesion_classification' => [function (string $attribute, mixed $value, Closure $fail) {
                if ($value !== null) {
                    $items = explode('|', $value);
                    foreach ($items as $item) {
                        if (!in_array($item, LesionClassification::toArray())) {
                            $fail(__('patient_file.lesion_classification_in'));
                        }
                    }
                }
            },],
            'special_lesion_classification' => [function (string $attribute, mixed $value, Closure $fail) {
                if ($value !== null) {
                    $items = explode('|', $value);
                    foreach ($items as $item) {
                        if (!in_array($item, SpecialLesionClassification::toArray())) {
                            $fail(__('patient_file.special_lesion_classification_in'));
                        }
                    }
                }
            },],
            'systemic_disease_history' => [function (string $attribute, mixed $value, Closure $fail) {
                if ($value !== null) {
                    $items = explode('|', $value);
                    foreach ($items as $item) {
                        if (!in_array($item, SystemicDiseaseHistory::toArray())) {
                            $fail(__('patient_file.systemic_disease_history_in'));
                        }
                    }
                }
            },],
            'blood_disease_type' => str_contains($this->input('systemic_disease_history'), 'blood_disease') ? 'max:200' : '',
            'hospitalization_reason' => str_contains($this->input('systemic_disease_history'), 'hospitalization_history') ? 'max:200' : '',
            'continuing_drug' => 'max:200',
            'weekly_drug' => 'max:200',
            'cancer_type' => str_contains($this->input('systemic_disease_history'), 'cancer') ? 'max:200' : '',
            'radiation_place' => str_contains($this->input('systemic_disease_history'), 'chemotherapy') ? 'max:200' : '',
            'pregnancy_week' => str_contains($this->input('systemic_disease_history'), 'pregnancy') ? 'max:200' : '',
            'pregnancy_num' => str_contains($this->input('systemic_disease_history'), 'pregnancy') ? 'max:200' : '',
            'pregnancy_rank' => str_contains($this->input('systemic_disease_history'), 'pregnancy') ? 'max:200' : '',
            'ad_explanation' => str_contains($this->input('systemic_disease_history'), 'artificial_device') ? 'max:200' : '',
            'sleep_status' => 'max:200',
            'functional_capacity' => 'max:200',
            'tobacco_use' => 'sometimes|numeric|min:0|max:1',
            'use_tobacco_duration' => $this->input('tobacco_use') === 1 ? 'max:200' : '',
            'use_tobacco_type' => $this->input('tobacco_use') === 1 ? 'max:200' : '',
            'drug_use' => 'sometimes|numeric|min:0|max:1',
            'use_drug_duration' => $this->input('drug_use') === 1 ? 'max:200' : '',
            'use_drug_type' => $this->input('drug_use') === 1 ? 'max:200' : '',
            'alcohol' => 'sometimes|numeric|min:0|max:1',
            'retromolar_area' => 'max:300',
            'gums' => 'max:300',
            'toothless_ridge' => 'max:300',
            'hard_soft_palate' => 'max:300',
            'tongue_dorsal' => 'max:300',
            'tongue_ventral' => 'max:300',
            'tongue_pharyngeal' => 'max:300',
            'neurological_changes' => 'max:300',
            'salivary_grand_examination' => 'max:300',
            'dental_changes_examination' => 'max:300',
            'probable_diagnosis' => 'max:300',
            'difinitive_diagnosis' => 'max:300',
            'final_treatment_plan' => 'max:1000',
            'assistant' => 'max:200',
            'master' => 'max:200',
        ];
    }

    public function messages()
    {
        return [
            'file_no.max' => __('patient_file.file_no_max'),
            'name.max' => __('patient_file.name_max'),
            'family.max' => __('patient_file.family_max'),
            'birth_date.numeric' => __('patient_file.birth_date_numeric'),
            'birth_date.gte' => __('patient_file.birth_date_gte'),
            'blood_disease_type.max' => __('patient_file.blood_disease_type_max'),
            'hospitalization_reason.max' => __('patient_file.hospitalization_reason_max'),
            'continuing_drug.max' => __('patient_file.continuing_drug_max'),
            'weekly_drug.max' => __('patient_file.weekly_drug_max'),
            'cancer_type.max' => __('patient_file.cancer_type_max'),
            'radiation_place.max' => __('patient_file.radiation_place_max'),
            'pregnancy_week.max' => __('patient_file.pregnancy_week_max'),
            'pregnancy_num.max' => __('patient_file.pregnancy_num_max'),
            'pregnancy_rank.max' => __('patient_file.pregnancy_rank_max'),
            'ad_explanation.max' => __('patient_file.ad_explanation_max'),
            'sleep_status.max' => __('patient_file.sleep_status_max'),
            'functional_capacity.max' => __('patient_file.functional_capacity_max'),
            'tobacco_use.numeric' => __('patient_file.tobacco_use_numeric'),
            'tobacco_use.min' => __('patient_file.tobacco_use_min'),
            'tobacco_use.max' => __('patient_file.tobacco_use_max'),
            'use_tobacco_duration.max' => __('patient_file.use_tobacco_duration_max'),
            'use_tobacco_type.max' => __('patient_file.use_tobacco_type_max'),
            'drug_use.numeric' => __('patient_file.drug_use_numeric'),
            'drug_use.min' => __('patient_file.drug_use_min'),
            'drug_use.max' => __('patient_file.drug_use_max'),
            'use_drug_duration.max' => __('patient_file.use_drug_duration_max'),
            'use_drug_type.max' => __('patient_file.use_drug_type_max'),
            'alcohol.numeric' => __('patient_file.alcohol_numeric'),
            'alcohol.min' => __('patient_file.alcohol_min'),
            'alcohol.max' => __('patient_file.alcohol_max'),
            'retromolar_area.max' => __('patient_file.retromolar_area_max'),
            'gums.max' => __('patient_file.gums_max'),
            'toothless_ridge.max' => __('patient_file.toothless_ridge_max'),
            'hard_soft_palate.max' => __('patient_file.hard_soft_palate_max'),
            'tongue_dorsal.max' => __('patient_file.tongue_dorsal_max'),
            'tongue_ventral.max' => __('patient_file.tongue_ventral_max'),
            'tongue_pharyngeal.max' => __('patient_file.tongue_pharyngeal_max'),
            'neurological_changes.max' => __('patient_file.neurological_changes_max'),
            'salivary_grand_examination.max' => __('patient_file.salivary_grand_examination_max'),
            'dental_changes_examination.max' => __('patient_file.dental_changes_examination_max'),
            'probable_diagnosis.max' => __('patient_file.probable_diagnosis_max'),
            'difinitive_diagnosis.max' => __('patient_file.difinitive_diagnosis_max'),
            'final_treatment_plan.max' => __('patient_file.final_treatment_plan_max'),
            'assistant.max' => __('patient_file.assistant_max'),
            'master.max' => __('patient_file.master_max'),
        ];
    }
}
