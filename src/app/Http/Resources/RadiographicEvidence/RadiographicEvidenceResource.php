<?php

namespace App\Http\Resources\RadiographicEvidence;

use Illuminate\Http\Resources\Json\JsonResource;

class RadiographicEvidenceResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => intval($this->id),
            'radiographicEvidence' => $this->radiographic_evidence,
            'file' => $this->path,
            'patientFileId' => intval($this->patient_file_id),
        ];
    }
}
