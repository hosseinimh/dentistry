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
        'item_8_description',
        'item_15_description',
        'item_16_description',
        'item_17_description',
        'item_20_description',
        'item_21_description',
        'item_25_1_description',
        'item_25_2_description',
        'item_25_3_description',
        'item_30_description',
        'item_32_description',
        'item_34_description',
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
    ];
}
