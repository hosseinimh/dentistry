<?php

namespace App\Http\Requests\PatientFile;

use App\Constants\ErrorCode;
use App\Constants\FamilialHistory;
use App\Constants\SystemicDiseaseHistory;
use Closure;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class UpdatePatientFileForm3Request extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::UPDATE_ERROR], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
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
            'blood_disease_type' => str_contains($this->input('systemic_disease_history'), 'blood_disease') ? 'required|max:200' : '',
            'hospitalization_reason' => str_contains($this->input('systemic_disease_history'), 'hospitalization_history') ? 'required|max:200' : '',
            'continuing_drug' => 'max:200',
            'weekly_drug' => 'max:200',
            'cancer_type' => str_contains($this->input('systemic_disease_history'), 'cancer') ? 'required|max:200' : '',
            'radiation_place' => str_contains($this->input('systemic_disease_history'), 'chemotherapy') ? 'required|max:200' : '',
            'pregnancy_week' => str_contains($this->input('systemic_disease_history'), 'pregnancy') ? 'required|max:200' : '',
            'pregnancy_num' => str_contains($this->input('systemic_disease_history'), 'pregnancy') ? 'required|max:200' : '',
            'pregnancy_rank' => str_contains($this->input('systemic_disease_history'), 'pregnancy') ? 'required|max:200' : '',
            'ad_explanation' => str_contains($this->input('systemic_disease_history'), 'artificial_device') ? 'required|max:200' : '',
            'sleep_status' => 'max:200',
            'functional_capacity' => 'max:200',
            'tobacco_use' => 'required|numeric|min:0|max:1',
            'use_tobacco_duration' => $this->input('tobacco_use') === 1 ? 'required|max:200' : '',
            'use_tobacco_type' => $this->input('tobacco_use') === 1 ? 'required|max:200' : '',
            'drug_use' => 'required|numeric|min:0|max:1',
            'use_drug_duration' => $this->input('drug_use') === 1 ? 'required|max:200' : '',
            'use_drug_type' => $this->input('drug_use') === 1 ? 'required|max:200' : '',
            'alcohol' => 'required|numeric|min:0|max:1',
            'pulse' => 'max:200',
            'body_temp' => 'max:200',
            'blood_pressure' => 'max:200',
            'resporate' => 'max:200',
            'weight' => 'max:200',
            'height' => 'max:200',
            'bmi' => 'max:200',
            'familial_history' => [function (string $attribute, mixed $value, Closure $fail) {
                if ($value !== null) {
                    $items = explode('|', $value);
                    foreach ($items as $item) {
                        if (!in_array($item, FamilialHistory::toArray())) {
                            $fail(__('patient_file.familial_history_in'));
                        }
                    }
                }
            },],
            'fca_type' => str_contains($this->input('familial_history'), 'fca') ? 'required|max:200' : '',
        ];
    }

    public function messages()
    {
        return [
            'blood_disease_type.required' => __('patient_file.blood_disease_type_required'),
            'blood_disease_type.max' => __('patient_file.blood_disease_type_max'),
            'hospitalization_reason.required' => __('patient_file.hospitalization_reason_required'),
            'hospitalization_reason.max' => __('patient_file.hospitalization_reason_max'),
            'continuing_drug.max' => __('patient_file.continuing_drug_max'),
            'weekly_drug.max' => __('patient_file.weekly_drug_max'),
            'cancer_type.required' => __('patient_file.cancer_type_required'),
            'cancer_type.max' => __('patient_file.cancer_type_max'),
            'radiation_place.required' => __('patient_file.radiation_place_required'),
            'radiation_place.max' => __('patient_file.radiation_place_max'),
            'pregnancy_week.required' => __('patient_file.pregnancy_week_required'),
            'pregnancy_week.max' => __('patient_file.pregnancy_week_max'),
            'pregnancy_num.required' => __('patient_file.pregnancy_num_required'),
            'pregnancy_num.max' => __('patient_file.pregnancy_num_max'),
            'pregnancy_rank.required' => __('patient_file.pregnancy_rank_required'),
            'pregnancy_rank.max' => __('patient_file.pregnancy_rank_max'),
            'ad_explanation.required' => __('patient_file.ad_explanation_required'),
            'ad_explanation.max' => __('patient_file.ad_explanation_max'),
            'sleep_status.max' => __('patient_file.sleep_status_max'),
            'functional_capacity.max' => __('patient_file.functional_capacity_max'),
            'tobacco_use.required' => __('patient_file.tobacco_use_required'),
            'tobacco_use.numeric' => __('patient_file.tobacco_use_numeric'),
            'tobacco_use.min' => __('patient_file.tobacco_use_min'),
            'tobacco_use.max' => __('patient_file.tobacco_use_max'),
            'use_tobacco_duration.required' => __('patient_file.use_tobacco_duration_required'),
            'use_tobacco_duration.max' => __('patient_file.use_tobacco_duration_max'),
            'use_tobacco_type.required' => __('patient_file.use_tobacco_type_required'),
            'use_tobacco_type.max' => __('patient_file.use_tobacco_type_max'),
            'drug_use.required' => __('patient_file.drug_use_required'),
            'drug_use.numeric' => __('patient_file.drug_use_numeric'),
            'drug_use.min' => __('patient_file.drug_use_min'),
            'drug_use.max' => __('patient_file.drug_use_max'),
            'use_drug_duration.required' => __('patient_file.use_drug_duration_required'),
            'use_drug_duration.max' => __('patient_file.use_drug_duration_max'),
            'use_drug_type.required' => __('patient_file.use_drug_type_required'),
            'use_drug_type.max' => __('patient_file.use_drug_type_max'),
            'alcohol.required' => __('patient_file.alcohol_required'),
            'alcohol.numeric' => __('patient_file.alcohol_numeric'),
            'alcohol.min' => __('patient_file.alcohol_min'),
            'alcohol.max' => __('patient_file.alcohol_max'),
            'pulse.max' => __('patient_file.pulse_max'),
            'body_temp.max' => __('patient_file.body_temp_max'),
            'blood_pressure.max' => __('patient_file.blood_pressure_max'),
            'resporate.max' => __('patient_file.resporate_max'),
            'weight.max' => __('patient_file.weight_max'),
            'height.max' => __('patient_file.height_max'),
            'bmi.max' => __('patient_file.bmi_max'),
            'fca_type.required' => __('patient_file.fca_type_required'),
            'fca_type.max' => __('patient_file.fca_type_max'),
        ];
    }
}
