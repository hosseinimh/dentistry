<?php

namespace App\Http\Resources\PatientFile;

use App\Constants\FamilialHistory;
use App\Constants\LesionClassification;
use App\Constants\SpecialLesionClassification;
use App\Constants\SystemicDiseaseHistory;
use App\Constants\TomporomandibularJoint;
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
            'item16DescriptionOriginal' => $this->item_16_description,
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
            'familialHistory' => $this->getFamilialHistory($this->familial_history),
            'fcaType' => $this->fca_type ?? '',
            'faceAssymetry' => $this->face_assymetry ?? '',
            'facePigmentation' => $this->face_pigmentation ?? '',
            'faceOtherPathalogical' => $this->face_other_pathalogical ?? '',
            'neckAssymetry' => $this->neck_assymetry ?? '',
            'neckTyExamination' => $this->neck_ty_examination ?? '',
            'lymphNodes' => $this->lymph_nodes ?? '',
            'tomporomandibularJoint' => $this->getTomporomandibularJoint($this->tomporomandibular_joint),
            'otherSignsTMJDescription' => $this->other_signs_tmj_description ?? '',
            'intraOralExamination' => $this->intra_oral_examination ?? '',
            'retromolarArea' => $this->retromolar_area ?? '',
            'gums' => $this->gums ?? '',
            'toothlessRidge' => $this->toothless_ridge ?? '',
            'hardSoftPalate' => $this->hard_soft_palate ?? '',
            'tongueDorsal' => $this->tongue_dorsal ?? '',
            'tongueVentral' => $this->tongue_ventral ?? '',
            'tonguePharyngeal' => $this->tongue_pharyngeal ?? '',
            'neurologicalChanges' => $this->neurological_changes ?? '',
            'salivaryGrandExamination' => $this->salivary_grand_examination ?? '',
            'dentalChangesExamination' => $this->dental_changes_examination ?? '',
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

    private function getFamilialHistory($familialHistory)
    {
        $result = [];
        if ($familialHistory !== null) {
            $items = explode('|', $familialHistory);
            foreach ($items as $item) {
                if (in_array($item, FamilialHistory::toArray())) {
                    $item = strtoupper($item);
                    $result[] = \constant("\App\Constants\FamilialHistoryResource::$item");
                }
            }
        }
        return $result;
    }

    private function getTomporomandibularJoint($tomporomandibularJoint)
    {
        $result = [];
        if ($tomporomandibularJoint !== null) {
            $items = explode('|', $tomporomandibularJoint);
            foreach ($items as $item) {
                if (in_array($item, TomporomandibularJoint::toArray())) {
                    $item = strtoupper($item);
                    $result[] = \constant("\App\Constants\TomporomandibularJointResource::$item");
                }
            }
        }
        return $result;
    }
}
