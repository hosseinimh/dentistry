<?php

namespace App\Http\Requests\PatientFile;

use App\Constants\ErrorCode;
use App\Constants\TomporomandibularJoint;
use Closure;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class UpdatePatientFileForm4Request extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::UPDATE_ERROR], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
            'face_assymetry' => 'max:300',
            'face_pigmentation' => 'max:300',
            'face_other_pathalogical' => 'max:300',
            'neck_assymetry' => 'max:300',
            'neck_ty_examination' => 'max:300',
            'lymph_nodes' => 'max:300',
            'tomporomandibular_joint' => [function (string $attribute, mixed $value, Closure $fail) {
                if ($value !== null) {
                    $items = explode('|', $value);
                    foreach ($items as $item) {
                        if (!in_array($item, TomporomandibularJoint::toArray())) {
                            $fail(__('patient_file.tomporomandibular_joint_in'));
                        }
                    }
                }
            },],
            'other_signs_tmj_description' => str_contains($this->input('tomporomandibular_joint'), 'other_signs_tmj') ? 'required|max:200' : '',
            'intra_oral_examination' => 'max:300',
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
        ];
    }

    public function messages()
    {
        return [
            'face_assymetry.max' => __('patient_file.face_assymetry_max'),
            'face_pigmentation.max' => __('patient_file.face_pigmentation_max'),
            'face_other_pathalogical.max' => __('patient_file.face_other_pathalogical_max'),
            'neck_assymetry.max' => __('patient_file.neck_assymetry_max'),
            'neck_ty_examination.max' => __('patient_file.neck_ty_examination_max'),
            'lymph_nodes.max' => __('patient_file.lymph_nodes_max'),
            'intra_oral_examination.max' => __('patient_file.intra_oral_examination_max'),
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
        ];
    }
}
