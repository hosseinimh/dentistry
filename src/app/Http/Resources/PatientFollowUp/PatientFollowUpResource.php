<?php

namespace App\Http\Resources\PatientFollowUp;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientFollowUpResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => intval($this->id),
            'date' => $this->date,
            'result' => $this->result,
            'patientFileId' => intval($this->patient_file_id),
        ];
    }
}
