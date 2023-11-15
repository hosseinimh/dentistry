<?php

namespace App\Services;

use App\Constants\ErrorCode;
use App\Models\PatientFile as Model;
use Exception;
use Illuminate\Database\Eloquent\Builder;

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

    public function getPaginate(
        ?string $fileNo,
        ?string $name,
        ?string $family,
        ?string $birthDate,
        ?string $lesionClassification,
        ?string $specialLesionClassification,
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
        ?string $probableDiagnosis,
        ?string $difinitiveDiagnosis,
        ?string $finalTreatmentPlan,
        ?string $assistant,
        ?string $master,
        int $page,
        int $pageItems
    ): mixed {
        return $this->createPaginateQuery(
            $fileNo,
            $name,
            $family,
            $birthDate,
            $lesionClassification,
            $specialLesionClassification,
            $systemicDiseaseHistory,
            $bloodDiseaseType,
            $hospitalizationReason,
            $continuingDrug,
            $weeklyDrug,
            $cancerType,
            $radiationPlace,
            $pregnancyWeek,
            $pregnancyNum,
            $pregnancyRank,
            $adExplanation,
            $sleepStatus,
            $functionalCapacity,
            $tobaccoUse,
            $useTobaccoDuration,
            $useTobaccoType,
            $drugUse,
            $useDrugDuration,
            $useDrugType,
            $alcohol,
            $retromolarArea,
            $gums,
            $toothlessRidge,
            $hardSoftPalate,
            $tongueDorsal,
            $tongueVentral,
            $tonguePharyngeal,
            $neurologicalChanges,
            $salivaryGrandExamination,
            $dentalChangesExamination,
            $probableDiagnosis,
            $difinitiveDiagnosis,
            $finalTreatmentPlan,
            $assistant,
            $master
        )->orderBy('file_no', 'DESC')->orderBy('id', 'DESC')->skip(($page - 1) * $pageItems)->take($pageItems)->get();
    }

    public function paginatedQuery(?string $fileNo, ?string $name, ?string $family): mixed
    {
        return Model::query()->where('file_no', 'LIKE', '%' . $fileNo . '%')->where('name', 'LIKE', '%' . $name . '%')->where('family', 'LIKE', '%' . $family . '%')->orderBy('file_no', 'DESC')->orderBy('id', 'DESC');
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
        ?string $tomporomandibularJoint,
        ?string $otherSignsTMJDescription,
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
        ?string $paraclinicalEvidence,
        ?string $consultationDeps,
        ?string $probableDiagnosis,
        ?string $differntialDiagnosis,
        ?string $difinitiveDiagnosis,
        ?string $systemicConsiderations,
        ?string $initialTreatmentPlan,
        ?string $finalTreatmentPlan,
        ?string $student,
        ?string $assistant,
        ?string $master,
        ?string $completedDate,
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
            'paraclinical_evidence' => $paraclinicalEvidence ?? '',
            'consultation_deps' => $consultationDeps ?? '',
            'probable_diagnosis' => $probableDiagnosis ?? '',
            'differntial_diagnosis' => $differntialDiagnosis ?? '',
            'difinitive_diagnosis' => $difinitiveDiagnosis ?? '',
            'systemic_considerations' => $systemicConsiderations ?? '',
            'initial_treatment_plan' => $initialTreatmentPlan ?? '',
            'final_treatment_plan' => $finalTreatmentPlan ?? '',
            'student' => $student ?? '',
            'assistant' => $assistant ?? '',
            'master' => $master ?? '',
            'completed_date' => $completedDate ?? '',
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

    public function delete(Model $model): bool
    {
        if ($model->dentition_file) {
            @unlink(storage_path('app') . '/public/storage/p_files/dentition/' . $model->dentition_file);
        }
        if ($model->decidious_file) {
            @unlink(storage_path('app') . '/public/storage/p_files/decidious/' . $model->decidious_file);
        }
        $radiographicEvidenceService = new RadiographicEvidenceService();
        foreach ($model->radiographicEvidences as $radiographicEvidence) {
            $radiographicEvidenceService->delete($radiographicEvidence);
        }
        foreach ($model->patientFollowUps as $patientFollowUp) {
            $patientFollowUp->delete();
        }
        return $model->delete();
    }

    public function count(
        ?string $fileNo,
        ?string $name,
        ?string $family,
        ?string $birthDate,
        ?string $lesionClassification,
        ?string $specialLesionClassification,
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
        ?string $probableDiagnosis,
        ?string $difinitiveDiagnosis,
        ?string $finalTreatmentPlan,
        ?string $assistant,
        ?string $master,
    ): int {
        return $this->createPaginateQuery(
            $fileNo,
            $name,
            $family,
            $birthDate,
            $lesionClassification,
            $specialLesionClassification,
            $systemicDiseaseHistory,
            $bloodDiseaseType,
            $hospitalizationReason,
            $continuingDrug,
            $weeklyDrug,
            $cancerType,
            $radiationPlace,
            $pregnancyWeek,
            $pregnancyNum,
            $pregnancyRank,
            $adExplanation,
            $sleepStatus,
            $functionalCapacity,
            $tobaccoUse,
            $useTobaccoDuration,
            $useTobaccoType,
            $drugUse,
            $useDrugDuration,
            $useDrugType,
            $alcohol,
            $retromolarArea,
            $gums,
            $toothlessRidge,
            $hardSoftPalate,
            $tongueDorsal,
            $tongueVentral,
            $tonguePharyngeal,
            $neurologicalChanges,
            $salivaryGrandExamination,
            $dentalChangesExamination,
            $probableDiagnosis,
            $difinitiveDiagnosis,
            $finalTreatmentPlan,
            $assistant,
            $master
        )->count();
    }

    private function createPaginateQuery(
        ?string $fileNo,
        ?string $name,
        ?string $family,
        ?string $birthDate,
        ?string $lesionClassification,
        ?string $specialLesionClassification,
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
        ?string $probableDiagnosis,
        ?string $difinitiveDiagnosis,
        ?string $finalTreatmentPlan,
        ?string $assistant,
        ?string $master,
    ): Builder {
        $birthDate = $birthDate ? substr($birthDate, 0, 4) . "/" . substr($birthDate, 4, 2) . "/" . substr($birthDate, 6) : null;
        $lesionClassificationItems = $lesionClassification ? explode('|', $lesionClassification) : [];
        $specialLesionClassificationItems = $specialLesionClassification ? explode('|', $specialLesionClassification) : [];
        $systemicDiseaseHistoryItems = $systemicDiseaseHistory ? explode('|', $systemicDiseaseHistory) : [];
        $query = Model::where('file_no', 'LIKE', '%' . $fileNo . '%')->where('name', 'LIKE', '%' . $name . '%')->where('family', 'LIKE', '%' . $family . '%')->where('birth_date', 'LIKE', '%' . $birthDate . '%');
        if (count($lesionClassificationItems) > 0) {
            $query->where(function ($query) use ($lesionClassificationItems) {
                foreach ($lesionClassificationItems as $item) {
                    $query->orWhere('lesion_classification', 'LIKE', '%' . $item . '%');
                }
            });
        }
        if (count($specialLesionClassificationItems) > 0) {
            $query->where(function ($query) use ($specialLesionClassificationItems) {
                foreach ($specialLesionClassificationItems as $item) {
                    $query->orWhere('special_lesion_classification', 'LIKE', '%' . $item . '%');
                }
            });
        }
        if (count($systemicDiseaseHistoryItems) > 0) {
            $query->where(function ($query) use ($systemicDiseaseHistoryItems) {
                foreach ($systemicDiseaseHistoryItems as $item) {
                    $query->orWhere('systemic_disease_history', 'LIKE', '%' . $item . '%');
                }
            });
            if (in_array('blood_disease', $systemicDiseaseHistoryItems)) {
                $query->where('blood_disease_type', 'LIKE', '%' . $bloodDiseaseType . '%');
            }
            if (in_array('hospitalization_history', $systemicDiseaseHistoryItems)) {
                $query->where('hospitalization_reason', 'LIKE', '%' . $hospitalizationReason . '%');
            }
            if (in_array('cancer', $systemicDiseaseHistoryItems)) {
                $query->where('cancer_type', 'LIKE', '%' . $cancerType . '%');
            }
            if (in_array('chemotherapy', $systemicDiseaseHistoryItems)) {
                $query->where('radiation_place', 'LIKE', '%' . $radiationPlace . '%');
            }
            if (in_array('pregnancy', $systemicDiseaseHistoryItems)) {
                $query->where('pregnancy_week', 'LIKE', '%' . $pregnancyWeek . '%')
                    ->where('pregnancy_num', 'LIKE', '%' . $pregnancyNum . '%')
                    ->where('pregnancy_rank', 'LIKE', '%' . $pregnancyRank . '%');
            }
            if (in_array('artificial_device', $systemicDiseaseHistoryItems)) {
                $query->where('ad_explanation', 'LIKE', '%' . $adExplanation . '%');
            }
        }
        $query->where('continuing_drug', 'LIKE', '%' . $continuingDrug . '%')
            ->where('weekly_drug', 'LIKE', '%' . $weeklyDrug . '%')
            ->where('sleep_status', 'LIKE', '%' . $sleepStatus . '%')
            ->where('functional_capacity', 'LIKE', '%' . $functionalCapacity . '%')
            ->where('tobacco_use', $tobaccoUse);
        if ($tobaccoUse) {
            $query->where('use_tobacco_duration', 'LIKE', '%' . $useTobaccoDuration . '%')
                ->where('use_tobacco_type', 'LIKE', '%' . $useTobaccoType . '%');
        }
        $query->where('drug_use', $drugUse);
        if ($drugUse) {
            $query->where('use_drug_duration', 'LIKE', '%' . $useDrugDuration . '%')
                ->where('use_drug_type', 'LIKE', '%' . $useDrugType . '%');
        }
        $query->where('alcohol', $alcohol);
        return $query->where('retromolar_area', 'LIKE', '%' . $retromolarArea . '%')
            ->where('gums', 'LIKE', '%' . $gums . '%')
            ->where('toothless_ridge', 'LIKE', '%' . $toothlessRidge . '%')
            ->where('hard_soft_palate', 'LIKE', '%' . $hardSoftPalate . '%')
            ->where('tongue_dorsal', 'LIKE', '%' . $tongueDorsal . '%')
            ->where('tongue_ventral', 'LIKE', '%' . $tongueVentral . '%')
            ->where('tongue_pharyngeal', 'LIKE', '%' . $tonguePharyngeal . '%')
            ->where('neurological_changes', 'LIKE', '%' . $neurologicalChanges . '%')
            ->where('salivary_grand_examination', 'LIKE', '%' . $salivaryGrandExamination . '%')
            ->where('dental_changes_examination', 'LIKE', '%' . $dentalChangesExamination . '%')
            ->where('probable_diagnosis', 'LIKE', '%' . $probableDiagnosis . '%')
            ->where('difinitive_diagnosis', 'LIKE', '%' . $difinitiveDiagnosis . '%')
            ->where('final_treatment_plan', 'LIKE', '%' . $finalTreatmentPlan . '%')
            ->where('assistant', 'LIKE', '%' . $assistant . '%')
            ->where('master', 'LIKE', '%' . $master . '%');
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
