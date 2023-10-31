<?php

namespace App\Http\Resources\PatientFile;

use App\Constants\LesionClassification;
use App\Constants\SpecialLesionClassification;
use App\Constants\SystemicDiseaseHistory;
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
            'systemicDiseaseHistory' => $this->getSystemicDiseaseHistory($this->systemic_disease_history),
            'item8Description' => $this->item_8_description ?? '',
            'item15Description' => $this->item_15_description ?? '',
            'item16Description' => $this->item_16_description ?? '',
            'item17Description' => $this->item_17_description ?? '',
            'item20Description' => $this->item_20_description ?? '',
            'item21Description' => $this->item_21_description ?? '',
            'item25_1Description' => $this->item_25_1_description ?? '',
            'item25_2Description' => $this->item_25_2_description ?? '',
            'item25_3Description' => $this->item_25_3_description ?? '',
            'item30Description' => $this->item_30_description ?? '',
            'item32Description' => $this->item_32_description ?? '',
            'item34Description' => $this->item_34_description ?? '',
            'tobaccoUse' => $this->tobacco_use,
            'useTobaccoDuration' => $this->use_tobacco_duration ?? '',
            'useTobaccoType' => $this->use_tobacco_type ?? '',
            'drugUse' => $this->drug_use,
            'useDrugDuration' => $this->use_drug_duration ?? '',
            'useDrugType' => $this->use_drug_type ?? '',
            'alcohol' => $this->alcohol,
            'pulse' => $this->pulse ?? '',
            'bodyTemp' => $this->body_temp ?? '',
            'bloodPressure' => $this->blood_pressure ?? '',
            'resporate' => $this->resporate ?? '',
            'weight' => $this->weight ?? '',
            'height' => $this->height ?? '',
            'bmi' => $this->bmi ?? '',
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

    private function getSystemicDiseaseHistory($systemicDiseaseHistory)
    {
        $result = [];
        if ($systemicDiseaseHistory !== null) {
            $items = explode('|', $systemicDiseaseHistory);
            foreach ($items as $item) {
                if (in_array($item, SystemicDiseaseHistory::toArray())) {
                    $item = strtoupper($item);
                    $result[] = \constant("\App\Constants\SystemicDiseaseHistoryResource::$item");
                }
            }
        }
        return $result;
    }
}
