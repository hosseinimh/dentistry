<?php

namespace App\Http\Requests\PatientFile;

use App\Constants\ErrorCode;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

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
        ];
    }

    public function messages()
    {
        return [
            'file_no.max' => __('patient_file.file_no_max'),
            'name.max' => __('patient_file.name_max'),
            'family.max' => __('patient_file.family_max'),
        ];
    }
}
