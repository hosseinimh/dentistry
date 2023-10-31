<?php

namespace App\Http\Requests\PatientFile;

use App\Constants\ErrorCode;
use App\Constants\LesionClassification;
use App\Constants\PatientReferal;
use App\Constants\SpecialLesionClassification;
use Closure;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class UpdatePatientFileForm2Request extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::UPDATE_ERROR], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
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
            'patient_referal' => ['required', Rule::in(PatientReferal::toArray())],
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
            'chief_compliant' => 'max:300',
            'chief_compliant_history' => 'max:300',
            'time_interval' => 'max:300',
            'referal_history' => 'max:300',
            'treatment_history' => 'max:300',
        ];
    }

    public function messages()
    {
        return [
            'patient_referal.required' => __('patient_file.patient_referal_required'),
            'patient_referal.in' => __('patient_file.patient_referal_in'),
            'chief_compliant.max' => __('patient_file.chief_compliant_max'),
            'chief_compliant_history.max' => __('patient_file.chief_compliant_history_max'),
            'time_interval.max' => __('patient_file.time_interval_max'),
            'referal_history.max' => __('patient_file.referal_history_max'),
            'treatment_history.max' => __('patient_file.treatment_history_max'),
        ];
    }
}
