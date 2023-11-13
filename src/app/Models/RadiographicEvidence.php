<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RadiographicEvidence extends Model
{
    use HasFactory;

    protected $table = 'tbl_radiographic_evidences';

    protected $fillable = [
        'radiographic_evidence',
        'path',
        'patient_file_id'
    ];
}
