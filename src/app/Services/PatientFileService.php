<?php

namespace App\Services;

use App\Constants\ErrorCode;
use App\Models\PatientFile as Model;
use Exception;

class PatientFileService
{
    public function get(int $id): mixed
    {
        return Model::where('id', $id)->first();
    }

    public function getByFileNo(string $fileNo): mixed
    {
        return Model::where('file_no', $fileNo)->first();
    }

    public function getPaginate(?string $fileNo, ?string $name, ?string $family, int $page, int $pageItems): mixed
    {
        return Model::where('file_no', 'LIKE', '%' . $fileNo . '%')->where('name', 'LIKE', '%' . $name . '%')->where('family', 'LIKE', '%' . $family . '%')->orderBy('file_no', 'DESC')->orderBy('id', 'DESC')->skip(($page - 1) * $pageItems)->take($pageItems)->get();
    }

    public function store(
        string $fileNo,
        string $firstVisitDate,
        string $name,
        string $family,
        string $nationalNo,
        string $birthDate,
        ?string $birthPlace,
        ?string $occupation,
        string $gender,
        string $maritialStatus,
        string $ethnicity,
        string $education,
        ?string $spouseOccupation,
        ?string $spouseRelationship,
        ?int $childrenNo,
        ?string $tel,
        ?string $mobile,
        ?string $relativeMobile,
        ?string $homeAddress,
        ?string $workAddress,
    ): mixed {
        $this->throwIfFileNoNotUnique($fileNo);
        $firstVisitDate = substr($firstVisitDate, 0, 4) . "/" . substr($firstVisitDate, 4, 2) . "/" . substr($firstVisitDate, 6);
        $birthDate = substr($birthDate, 0, 4) . "/" . substr($birthDate, 4, 2) . "/" . substr($birthDate, 6);
        $data = [
            'file_no' => $fileNo ?? '',
            'first_visit_date' => $firstVisitDate,
            'name' => $name ?? '',
            'family' => $family ?? '',
            'national_no' => $nationalNo ?? '',
            'birth_date' => $birthDate ?? '',
            'birth_place' => $birthPlace ?? '',
            'occupation' => $occupation ?? '',
            'gender' => $gender,
            'maritial_status' => $maritialStatus,
            'ethnicity' => $ethnicity,
            'education' => $education,
            'spouse_occupation' => $spouseOccupation ?? '',
            'spouse_relationship' => $spouseRelationship ?? '',
            'children_no' => $childrenNo ?? 0,
            'tel' => $tel ?? '',
            'mobile' => $mobile ?? '',
            'relative_mobile' => $relativeMobile ?? '',
            'home_address' => $homeAddress ?? '',
            'work_address' => $workAddress ?? '',

        ];
        return  Model::create($data) ?? null;
    }

    public function updateForm1(
        Model $model,
        string $fileNo,
        string $firstVisitDate,
        string $name,
        string $family,
        string $nationalNo,
        string $birthDate,
        ?string $birthPlace,
        ?string $occupation,
        string $gender,
        string $maritialStatus,
        string $ethnicity,
        string $education,
        ?string $spouseOccupation,
        ?string $spouseRelationship,
        ?int $childrenNo,
        ?string $tel,
        ?string $mobile,
        ?string $relativeMobile,
        ?string $homeAddress,
        ?string $workAddress,
    ): mixed {
        $this->throwIfFileNoNotUnique($fileNo, $model);
        $firstVisitDate = substr($firstVisitDate, 0, 4) . "/" . substr($firstVisitDate, 4, 2) . "/" . substr($firstVisitDate, 6);
        $birthDate = substr($birthDate, 0, 4) . "/" . substr($birthDate, 4, 2) . "/" . substr($birthDate, 6);
        $data = [
            'file_no' => $fileNo ?? '',
            'first_visit_date' => $firstVisitDate,
            'name' => $name ?? '',
            'family' => $family ?? '',
            'national_no' => $nationalNo ?? '',
            'birth_date' => $birthDate ?? '',
            'birth_place' => $birthPlace ?? '',
            'occupation' => $occupation ?? '',
            'gender' => $gender,
            'maritial_status' => $maritialStatus,
            'ethnicity' => $ethnicity,
            'education' => $education,
            'spouse_occupation' => $spouseOccupation ?? '',
            'spouse_relationship' => $spouseRelationship ?? '',
            'children_no' => $childrenNo ?? 0,
            'tel' => $tel ?? '',
            'mobile' => $mobile ?? '',
            'relative_mobile' => $relativeMobile ?? '',
            'home_address' => $homeAddress ?? '',
            'work_address' => $workAddress ?? '',
        ];
        return $model->update($data);
    }

    public function updateForm2(
        Model $model,
        ?string $lesionClassification,
        string $patientReferal,
        ?string $specialLesionClassification,
        ?string $chiefCompliant,
        ?string $chiefCompliantHistory,
        ?string $timeInterval,
        ?string $referalHistory,
        ?string $treatmentHistory
    ): mixed {
        $data = [
            'lesion_classification' => $lesionClassification,
            'patient_referal' => $patientReferal,
            'special_lesion_classification' => $specialLesionClassification,
            'chief_compliant' => $chiefCompliant ?? '',
            'chief_compliant_history' => $chiefCompliantHistory ?? '',
            'time_interval' => $timeInterval ?? '',
            'referal_history' => $referalHistory ?? '',
            'treatment_history' => $treatmentHistory ?? '',
        ];
        return $model->update($data);
    }

    public function updateForm3(
        Model $model,
        ?string $systemicDiseaseHistory,
        ?string $item8Description,
        ?string $item15Description,
        ?string $item16Description,
        ?string $item17Description,
        ?string $item20Description,
        ?string $item21Description,
        ?string $item25_1Description,
        ?string $item25_2Description,
        ?string $item25_3Description,
        ?string $item30Description,
        ?string $item32Description,
        ?string $item34Description,
        int $tobaccoUse,
        ?string $useTobaccoDuration,
        ?string $useTobaccoType,
        int $drugUse,
        ?string $useDrugDuration,
        ?string $useDrugType,
        int $alcohol,
        ?string $pulse,
        ?string $bodyTemp,
        ?string $bloodPressure,
        ?string $resporate,
        ?string $weight,
        ?string $height,
        ?string $bmi,
        ?string $familialHistory,
        ?string $fcaType,
    ): mixed {
        $data = [
            'systemic_disease_history' => $systemicDiseaseHistory,
            'item_8_description' => $item8Description ?? '',
            'item_15_description' => $item15Description ?? '',
            'item_16_description' => $item16Description ?? '',
            'item_17_description' => $item17Description ?? '',
            'item_20_description' => $item20Description ?? '',
            'item_21_description' => $item21Description ?? '',
            'item_25_1_description' => $item25_1Description ?? '',
            'item_25_2_description' => $item25_2Description ?? '',
            'item_25_3_description' => $item25_3Description ?? '',
            'item_30_description' => $item30Description ?? '',
            'item_32_description' => $item32Description ?? '',
            'item_34_description' => $item34Description ?? '',
            'tobacco_use' => $tobaccoUse,
            'use_tobacco_duration' => $useTobaccoDuration ?? '',
            'use_tobacco_type' => $useTobaccoType ?? '',
            'drug_use' => $drugUse,
            'use_drug_duration' => $useDrugDuration ?? '',
            'use_drug_type' => $useDrugType ?? '',
            'alcohol' => $alcohol,
            'pulse' => $pulse ?? '',
            'body_temp' => $bodyTemp ?? '',
            'blood_pressure' => $bloodPressure ?? '',
            'resporate' => $resporate ?? '',
            'weight' => $weight ?? '',
            'height' => $height ?? '',
            'bmi' => $bmi ?? '',
            'familial_history' => $familialHistory ?? '',
            'fca_type' => $fcaType ?? '',

        ];
        return $model->update($data);
    }

    public function updateForm4(
        Model $model,
        ?string $faceAssymetry,
        ?string $facePigmentation,
        ?string $faceOtherPathalogical,
        ?string $neckAssymetry,
        ?string $neckTyExamination,
        ?string $lymphNodes,
        string $tomporomandibularJoint,
        ?string $otherSignsTMJDescription,
        ?string $intraOralExamination,
        ?string $retromolarArea,
        ?string $gums,
        ?string $toothlessRidge,
        ?string $hardSoftPalate,
        ?string $tongueDorsal,
        ?string $tongueVentral,
        ?string $tonguePharyngeal,
        ?string $neurologicalChanges,
        ?string $salivaryGrandExamination,
        ?string $dentalChangesExamination,
    ): mixed {
        $data = [
            'face_assymetry' => $faceAssymetry ?? '',
            'face_pigmentation' => $facePigmentation ?? '',
            'face_other_pathalogical' => $faceOtherPathalogical ?? '',
            'neck_assymetry' => $neckAssymetry ?? '',
            'neck_ty_examination' => $neckTyExamination ?? '',
            'lymph_nodes' => $lymphNodes ?? '',
            'tomporomandibular_joint' => $tomporomandibularJoint,
            'other_signs_tmj_description' => $otherSignsTMJDescription ?? '',
            'intra_oral_examination' => $intraOralExamination ?? '',
            'retromolar_area' => $retromolarArea ?? '',
            'gums' => $gums ?? '',
            'toothless_ridge' => $toothlessRidge ?? '',
            'hard_soft_palate' => $hardSoftPalate ?? '',
            'tongue_dorsal' => $tongueDorsal ?? '',
            'tongue_ventral' => $tongueVentral ?? '',
            'tongue_pharyngeal' => $tonguePharyngeal ?? '',
            'neurological_changes' => $neurologicalChanges ?? '',
            'salivary_grand_examination' => $salivaryGrandExamination ?? '',
            'dental_changes_examination' => $dentalChangesExamination ?? '',
        ];
        return $model->update($data);
    }

    public function count(?string $fileNo, ?string $name, ?string $family): int
    {
        return Model::where('file_no', 'LIKE', '%' . $fileNo . '%')->where('name', 'LIKE', '%' . $name . '%')->where('family', 'LIKE', '%' . $family . '%')->count();
    }

    private function throwIfFileNoNotUnique(string $fileNo, Model|null $targetModel = null)
    {
        $patientFile = $this->getByFileNo($fileNo);
        if (!$patientFile || $targetModel?->id === $patientFile->id) {
            return;
        }
        throw new Exception(__('patient_file.file_no_unique'), ErrorCode::CUSTOM_ERROR);
    }
}
