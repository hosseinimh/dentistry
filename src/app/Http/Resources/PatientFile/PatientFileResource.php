<?php

namespace App\Http\Resources\PatientFile;

use App\Constants\LesionClassification;
use App\Constants\SpecialLesionClassification;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientFileResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => intval($this->id),
            'fileNo' => $this->file_no,
            'firstVisitDate' => $this->first_visit_date,
            'name' => $this->name,
            'family' => $this->family,
            'nationalNo' => $this->national_no ?? '',
            'birthDate' => $this->birth_date ?? '',
            'birthPlace' => $this->birth_place ?? '',
            'occupation' => $this->occupation ?? '',
            'gender' => $this->gender,
            'maritialStatus' => $this->maritial_status,
            'ethnicity' => $this->ethnicity,
            'education' => $this->education,
            'spouseOccupation' => $this->spouse_occupation ?? '',
            'spouseRelationship' => $this->spouse_relationship ?? '',
            'childrenNo' => $this->children_no ?? '',
            'tel' => $this->tel ?? '',
            'mobile' => $this->mobile ?? '',
            'relativeMobile' => $this->relative_mobile ?? '',
            'homeAddress' => $this->home_address ?? '',
            'workAddress' => $this->work_address ?? '',
            'lesionClassification' => $this->getLesionClassification($this->lesion_classification),
            'patientReferal' => $this->patient_referal,
            'specialLesionClassification' => $this->getSpecialLesionClassification($this->special_lesion_classification),
            'chiefCompliant' => $this->chief_compliant ?? '',
            'chiefCompliantHistory' => $this->chief_compliant_history ?? '',
            'timeInterval' => $this->time_interval ?? '',
            'referalHistory' => $this->referal_history ?? '',
            'treatmentHistory' => $this->treatment_history ?? '',
        ];
    }

    private function getLesionClassification($lesionClassification)
    {
        $result = [];
        if ($lesionClassification !== null) {
            $items = explode('|', $lesionClassification);
            foreach ($items as $item) {
                if (in_array($item, LesionClassification::toArray())) {
                    $item = strtoupper($item);
                    $result[] = \constant("\App\Constants\LesionClassificationResource::$item");
                }
            }
        }
        return $result;
    }

    private function getSpecialLesionClassification($specialLesionClassification)
    {
        $result = [];
        if ($specialLesionClassification !== null) {
            $items = explode('|', $specialLesionClassification);
            foreach ($items as $item) {
                if (in_array($item, SpecialLesionClassification::toArray())) {
                    $item = strtoupper($item);
                    $result[] = \constant("\App\Constants\SpecialLesionClassificationResource::$item");
                }
            }
        }
        return $result;
    }
}
