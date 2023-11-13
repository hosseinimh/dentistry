<?php

namespace App\Http\Requests\PatientFollowUp;

use App\Constants\ErrorCode;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class UpdatePatientFollowUpRequest extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::UPDATE_ERROR], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
            'date' => 'required|numeric|gte:13000101',
            'result' => 'required|max:1000',
        ];
    }

    public function messages()
    {
        return [
            'date.required' => __('patient_follow_up.date_required'),
            'date.numeric' => __('patient_follow_up.date_numeric'),
            'date.gte' => __('patient_follow_up.date_gte'),
            'result.required' => __('patient_follow_up.result_required'),
            'result.max' => __('patient_follow_up.result_max'),
        ];
    }
}
