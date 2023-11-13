<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientFollowUp extends Model
{
    use HasFactory;

    protected $table = 'tbl_patient_follow_ups';

    protected $fillable = [
        'date',
        'result',
        'patient_file_id'
    ];
}
