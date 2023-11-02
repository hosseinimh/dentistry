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
            'item_8_description' => str_contains($this->input('systemic_disease_history'), 'item_8') ? 'required|max:200' : '',
            'item_15_description' => str_contains($this->input('systemic_disease_history'), 'item_15') ? 'required|max:200' : '',
            'item_16_description' => str_contains($this->input('systemic_disease_history'), 'item_16') ? 'required|max:200' : '',
            'item_17_description' => str_contains($this->input('systemic_disease_history'), 'item_17') ? 'required|max:200' : '',
            'item_20_description' => str_contains($this->input('systemic_disease_history'), 'item_20') ? 'required|max:200' : '',
            'item_21_description' => str_contains($this->input('systemic_disease_history'), 'item_21') ? 'required|max:200' : '',
            'item_25_1_description' => str_contains($this->input('systemic_disease_history'), 'item_25') ? 'required|max:200' : '',
            'item_25_2_description' => str_contains($this->input('systemic_disease_history'), 'item_25') ? 'required|max:200' : '',
            'item_25_3_description' => str_contains($this->input('systemic_disease_history'), 'item_25') ? 'required|max:200' : '',
            'item_30_description' => str_contains($this->input('systemic_disease_history'), 'item_30') ? 'required|max:200' : '',
            'item_32_description' => str_contains($this->input('systemic_disease_history'), 'item_32') ? 'required|max:200' : '',
            'item_34_description' => str_contains($this->input('systemic_disease_history'), 'item_34') ? 'required|max:200' : '',
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
            'item_8_description.required' => __('patient_file.item_8_description_required'),
            'item_8_description.max' => __('patient_file.item_8_description_max'),
            'item_15_description.required' => __('patient_file.item_15_description_required'),
            'item_15_description.max' => __('patient_file.item_15_description_max'),
            'item_16_description.required' => __('patient_file.item_16_description_required'),
            'item_16_description.max' => __('patient_file.item_16_description_max'),
            'item_17_description.required' => __('patient_file.item_17_description_required'),
            'item_17_description.max' => __('patient_file.item_17_description_max'),
            'item_20_description.required' => __('patient_file.item_20_description_required'),
            'item_20_description.max' => __('patient_file.item_20_description_max'),
            'item_21_description.required' => __('patient_file.item_21_description_required'),
            'item_21_description.max' => __('patient_file.item_21_description_max'),
            'item_25_1_description.required' => __('patient_file.item_25_1_description_required'),
            'item_25_1_description.max' => __('patient_file.item_25_1_description_max'),
            'item_25_2_description.required' => __('patient_file.item_25_2_description_required'),
            'item_25_2_description.max' => __('patient_file.item_25_2_description_max'),
            'item_25_3_description.required' => __('patient_file.item_25_3_description_required'),
            'item_25_3_description.max' => __('patient_file.item_25_3_description_max'),
            'item_30_description.required' => __('patient_file.item_30_description_required'),
            'item_30_description.max' => __('patient_file.item_30_description_max'),
            'item_32_description.required' => __('patient_file.item_32_description_required'),
            'item_32_description.max' => __('patient_file.item_32_description_max'),
            'item_34_description.required' => __('patient_file.item_34_description_required'),
            'item_34_description.max' => __('patient_file.item_34_description_max'),
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
