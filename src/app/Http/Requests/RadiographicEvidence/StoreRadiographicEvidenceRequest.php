<?php

namespace App\Http\Requests\RadiographicEvidence;

use App\Constants\ErrorCode;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class StoreRadiographicEvidenceRequest extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::STORE_ERROR], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
            'radiographic_evidence' => 'required|max:1000',
        ];
    }

    public function messages()
    {
        return [
            'radiographic_evidence.required' => __('radiographic_evidence.radiographic_evidence_required'),
            'radiographic_evidence.max' => __('radiographic_evidence.radiographic_evidence_max'),
        ];
    }
}
