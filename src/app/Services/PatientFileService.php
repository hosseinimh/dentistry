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
        ?string $bloodDiseaseType,
        ?string $hospitalizationReason,
        ?string $continuingDrug,
        ?string $weeklyDrug,
        ?string $cancerType,
        ?string $radiationPlace,
        ?string $pregnancyWeek,
        ?string $pregnancyNum,
        ?string $pregnancyRank,
        ?string $adExplanation,
        ?string $sleepStatus,
        ?string $functionalCapacity,
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
            'blood_disease_type' => $bloodDiseaseType ?? '',
            'hospitalization_reason' => $weeklyDrug ?? '',
            'continuing_drug' => $hospitalizationReason ?? '',
            'weekly_drug' => $continuingDrug ?? '',
            'cancer_type' => $cancerType ?? '',
            'radiation_place' => $radiationPlace ?? '',
            'pregnancy_week' => $pregnancyWeek ?? '',
            'pregnancy_num' => $pregnancyNum ?? '',
            'pregnancy_rank' => $pregnancyRank ?? '',
            'ad_explanation' => $adExplanation ?? '',
            'sleep_status' => $sleepStatus ?? '',
            'functional_capacity' => $functionalCapacity ?? '',
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
        ?string $adultDmft,
        ?string $adultD,
        ?string $adultM,
        ?string $adultT,
        ?string $decidiousDmft,
        ?string $decidiousD,
        ?string $decidiousM,
        ?string $decidiousT,
        ?string $priodontalExamination,
        string $bop,
        ?string $radiographicEvidence,
        ?string $paraclinicalEvidence,
        ?string $consultationDeps,
        ?string $probableDiagnosis,
        ?string $differntialDiagnosis,
        ?string $difinitiveDiagnosis,
        ?string $systemicConsiderations,
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
            'adult_dmft' => $adultDmft ?? '',
            'adult_d' => $adultD ?? '',
            'adult_m' => $adultM ?? '',
            'adult_t' => $adultT ?? '',
            'decidious_dmft' => $decidiousDmft ?? '',
            'decidious_d' => $decidiousD ?? '',
            'decidious_m' => $decidiousM ?? '',
            'decidious_t' => $decidiousT ?? '',
            'priodontal_examination' => $priodontalExamination ?? '',
            'bop' => $bop,
            'radiographic_evidence' => $radiographicEvidence ?? '',
            'paraclinical_evidence' => $paraclinicalEvidence ?? '',
            'consultation_deps' => $consultationDeps ?? '',
            'probable_diagnosis' => $probableDiagnosis ?? '',
            'differntial_diagnosis' => $differntialDiagnosis ?? '',
            'difinitive_diagnosis' => $difinitiveDiagnosis ?? '',
            'systemic_considerations' => $systemicConsiderations ?? '',
        ];
        return $model->update($data);
    }

    public function removeDentitionFile(
        Model $model,
    ): mixed {
        if ($model->dentition_file) {
            @unlink(storage_path('app') . '/public/storage/p_files/' . $model->dentition_file);
        }
        $data = [
            'dentition_file' => null,
        ];
        return $model->update($data);
    }

    public function removeDecidiousFile(
        Model $model,
    ): mixed {
        if ($model->decidious_file) {
            @unlink(storage_path('app') . '/public/storage/p_files/' . $model->decidious_file);
        }
        $data = [
            'decidious_file' => null,
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
