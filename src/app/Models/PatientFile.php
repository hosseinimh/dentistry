<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PatientFile extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'tbl_patient_files';

    protected $fillable = [
        'file_no',
        'first_visit_date',
        'name',
        'family',
        'national_no',
        'birth_date',
        'birth_place',
        'occupation',
        'gender',
        'maritial_status',
        'ethnicity',
        'education',
        'spouse_occupation',
        'spouse_relationship',
        'children_no',
        'tel',
        'mobile',
        'relative_mobile',
        'home_address',
        'work_address',
        'lesion_classification',
        'patient_referal',
        'special_lesion_classification',
        'chief_compliant',
        'chief_compliant_history',
        'time_interval',
        'referal_history',
        'treatment_history',
        'systemic_disease_history',
        'blood_disease_type',
        'hospitalization_reason',
        'continuing_drug',
        'weekly_drug',
        'cancer_type',
        'radiation_place',
        'pregnancy_week',
        'pregnancy_num',
        'pregnancy_rank',
        'ad_explanation',
        'sleep_status',
        'functional_capacity',
        'tobacco_use',
        'use_tobacco_duration',
        'use_tobacco_type',
        'drug_use',
        'use_drug_duration',
        'use_drug_type',
        'alcohol',
        'pulse',
        'body_temp',
        'blood_pressure',
        'resporate',
        'weight',
        'height',
        'bmi',
        'familial_history',
        'fca_type',
        'face_assymetry',
        'face_pigmentation',
        'face_other_pathalogical',
        'neck_assymetry',
        'neck_ty_examination',
        'lymph_nodes',
        'tomporomandibular_joint',
        'other_signs_tmj_description',
        'intra_oral_examination',
        'retromolar_area',
        'gums',
        'toothless_ridge',
        'hard_soft_palate',
        'tongue_dorsal',
        'tongue_ventral',
        'tongue_pharyngeal',
        'lymph_nodes',
        'neurological_changes',
        'salivary_grand_examination',
        'dental_changes_examination',
        'dentition_file',
        'adult_dmft',
        'adult_d',
        'adult_m',
        'adult_t',
        'decidious_file',
        'decidious_dmft',
        'decidious_d',
        'decidious_m',
        'decidious_t',
        'priodontal_examination',
        'bop',
        'radiographic_evidence',
        'paraclinical_evidence',
        'consultation_deps',
        'probable_diagnosis',
        'differntial_diagnosis',
        'difinitive_diagnosis',
        'systemic_considerations',
    ];

    protected static function booted()
    {
        static::deleting(function ($patientFile) {
            if ($patientFile->dentition_file) {
                @unlink(storage_path('app') . '/public/storage/p_files/' . $patientFile->dentition_file);
            }
            if ($patientFile->decidious_file) {
                @unlink(storage_path('app') . '/public/storage/p_files/' . $patientFile->decidious_file);
            }
        });
    }
}
