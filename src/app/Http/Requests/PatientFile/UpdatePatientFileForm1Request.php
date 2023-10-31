<?php

namespace App\Http\Requests\PatientFile;

use App\Constants\Education;
use App\Constants\ErrorCode;
use App\Constants\Ethnicity;
use App\Constants\Gender;
use App\Constants\MaritialStatus;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class UpdatePatientFileForm1Request extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::UPDATE_ERROR], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
            'file_no' => 'required|max:50',
            'first_visit_date' => 'required|numeric|gte:13000101',
            'name' => 'required|min:2|max:50',
            'family' => 'required|min:2|max:50',
            'national_no' => 'required|digits:10',
            'birth_date' => 'required|numeric|gte:13000101',
            'birth_place' => 'max:50',
            'gender' => ['required', Rule::in(Gender::toArray())],
            'maritial_status' => ['required', Rule::in(MaritialStatus::toArray())],
            'occupation' => 'max:50',
            'ethnicity' => ['required', Rule::in(Ethnicity::toArray())],
            'education' => ['required', Rule::in(Education::toArray())],
            'spouse_occupation' => 'max:50',
            'spouse_relationship' => 'max:50',
            'children_no' => 'required|numeric|gte:0|lte:15',
            'tel' => 'max:50',
            'mobile' => 'max:50',
            'relative_mobile' => 'max:50',
            'home_address' => 'max:300',
            'work_address' => 'max:300',
        ];
    }

    public function messages()
    {
        return [
            'file_no.required' => __('patient_file.file_no_required'),
            'file_no.max' => __('patient_file.file_no_max'),
            'first_visit_date.required' => __('patient_file.first_visit_date_required'),
            'first_visit_date.numeric' => __('patient_file.first_visit_date_numeric'),
            'first_visit_date.gte' => __('patient_file.first_visit_date_gte'),
            'name.required' => __('patient_file.name_required'),
            'name.min' => __('patient_file.name_min'),
            'name.max' => __('patient_file.name_max'),
            'family.required' => __('patient_file.family_required'),
            'family.min' => __('patient_file.family_min'),
            'family.max' => __('patient_file.family_max'),
            'national_no.required' => __('patient_file.national_no_required'),
            'national_no.digits' => __('patient_file.national_no_digits'),
            'birth_date.required' => __('patient_file.birth_date_required'),
            'birth_date.numeric' => __('patient_file.birth_date_numeric'),
            'birth_date.gte' => __('patient_file.birth_date_gte'),
            'birth_place.max' => __('patient_file.birth_place_max'),
            'gender.required' => __('patient_file.gender_required'),
            'gender.in' => __('patient_file.gender_in'),
            'maritial_status.required' => __('patient_file.maritial_status_required'),
            'maritial_status.in' => __('patient_file.maritial_status_in'),
            'occupation.max' => __('patient_file.occupation_max'),
            'ethnicity.required' => __('patient_file.ethnicity_required'),
            'ethnicity.in' => __('patient_file.ethnicity_in'),
            'education.required' => __('patient_file.education_required'),
            'education.in' => __('patient_file.education_in'),
            'spouse_occupation.max' => __('patient_file.spouse_occupation_max'),
            'spouse_relationship.max' => __('patient_file.spouse_relationship_max'),
            'children_no.required' => __('patient_file.children_no_required'),
            'children_no.numeric' => __('patient_file.children_no_numeric'),
            'children_no.gte' => __('patient_file.children_no_gte'),
            'children_no.lte' => __('patient_file.children_no_lte'),
            'tel.max' => __('patient_file.tel_max'),
            'mobile.max' => __('patient_file.mobile_max'),
            'relative_mobile.max' => __('patient_file.relative_mobile_max'),
            'home_address.max' => __('patient_file.home_address_max'),
            'work_address.max' => __('patient_file.work_address_max'),
        ];
    }
}
