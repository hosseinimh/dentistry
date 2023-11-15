<?php

namespace App\Exports;

use App\Services\PatientFileService;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithDefaultStyles;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Style;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class PatientFilesExport implements FromQuery, WithMapping, WithHeadings, ShouldAutoSize, WithDefaultStyles, WithStyles
{
    private int $index;

    public function __construct(
        private ?string $fileNo,
        private ?string $name,
        private ?string $family,
        private ?string $birthDate,
        private ?string $lesionClassification,
        private ?string $specialLesionClassification,
        private ?string $systemicDiseaseHistory,
        private ?string $bloodDiseaseType,
        private ?string $hospitalizationReason,
        private ?string $continuingDrug,
        private ?string $weeklyDrug,
        private ?string $cancerType,
        private ?string $radiationPlace,
        private ?string $pregnancyWeek,
        private ?string $pregnancyNum,
        private ?string $pregnancyRank,
        private ?string $adExplanation,
        private ?string $sleepStatus,
        private ?string $functionalCapacity,
        private int $tobaccoUse,
        private ?string $useTobaccoDuration,
        private ?string $useTobaccoType,
        private int $drugUse,
        private ?string $useDrugDuration,
        private ?string $useDrugType,
        private int $alcohol,
        private ?string $retromolarArea,
        private ?string $gums,
        private ?string $toothlessRidge,
        private ?string $hardSoftPalate,
        private ?string $tongueDorsal,
        private ?string $tongueVentral,
        private ?string $tonguePharyngeal,
        private ?string $neurologicalChanges,
        private ?string $salivaryGrandExamination,
        private ?string $dentalChangesExamination,
        private ?string $probableDiagnosis,
        private ?string $difinitiveDiagnosis,
        private ?string $finalTreatmentPlan,
        private ?string $assistant,
        private ?string $master,
    ) {
        $this->index = 1;
    }

    public function defaultStyles(Style $defaultStyle)
    {
        return [
            'alignment' => [
                'vertical' => Alignment::VERTICAL_TOP,
            ],
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            'Z'  => ['alignment' => ['wrapText' => true]],
        ];
    }

    public function headings(): array
    {
        return [
            __('patient_file.excel_row_no'),
            __('patient_file.excel_file_no'),
            __('patient_file.excel_first_visit_date'),
            __('patient_file.excel_name'),
            __('patient_file.excel_family'),
            __('patient_file.excel_national_no'),
            __('patient_file.excel_birth_date'),
            __('patient_file.excel_birth_place'),
            __('patient_file.excel_occupation'),
            __('patient_file.excel_gender'),
            __('patient_file.excel_maritial_status'),
            __('patient_file.excel_ethnicity'),
            __('patient_file.excel_education'),
            __('patient_file.excel_spouse_occupation'),
            __('patient_file.excel_spouse_relationship'),
            __('patient_file.excel_children_no'),
            __('patient_file.excel_tel'),
            __('patient_file.excel_mobile'),
            __('patient_file.excel_relative_mobile'),
            __('patient_file.excel_home_address'),
            __('patient_file.excel_work_address'),
            __('patient_file.excel_lesion_classification'),
            __('patient_file.excel_patient_referal'),
            __('patient_file.excel_special_lesion_classification'),
            __('patient_file.excel_chief_compliant'),
            __('patient_file.excel_chief_compliant_history'),
            __('patient_file.excel_time_interval'),
            __('patient_file.excel_referal_history'),
            __('patient_file.excel_treatment_history'),
            __('patient_file.excel_systemic_disease_history'),
            __('patient_file.excel_blood_disease_type'),
            __('patient_file.excel_hospitalization_reason'),
            __('patient_file.excel_continuing_drug'),
            __('patient_file.excel_weekly_drug'),
            __('patient_file.excel_cancer_type'),
            __('patient_file.excel_radiation_place'),
            __('patient_file.excel_pregnancy_week'),
            __('patient_file.excel_pregnancy_num'),
            __('patient_file.excel_pregnancy_rank'),
            __('patient_file.excel_ad_explanation'),
            __('patient_file.excel_sleep_status'),
            __('patient_file.excel_functional_capacity'),
            __('patient_file.excel_tobacco_use'),
            __('patient_file.excel_use_tobacco_duration'),
            __('patient_file.excel_assistant'),
            __('patient_file.excel_master'),
        ];
    }

    public function query()
    {
        $patientFileService = new PatientFileService();
        return $patientFileService->paginatedQuery(
            $this->fileNo,
            $this->name,
            $this->family,
            $this->birthDate,
            $this->lesionClassification,
            $this->specialLesionClassification,
            $this->systemicDiseaseHistory,
            $this->bloodDiseaseType,
            $this->hospitalizationReason,
            $this->continuingDrug,
            $this->weeklyDrug,
            $this->cancerType,
            $this->radiationPlace,
            $this->pregnancyWeek,
            $this->pregnancyNum,
            $this->pregnancyRank,
            $this->adExplanation,
            $this->sleepStatus,
            $this->functionalCapacity,
            $this->tobaccoUse,
            $this->useTobaccoDuration,
            $this->useTobaccoType,
            $this->drugUse,
            $this->useDrugDuration,
            $this->useDrugType,
            $this->alcohol,
            $this->retromolarArea,
            $this->gums,
            $this->toothlessRidge,
            $this->hardSoftPalate,
            $this->tongueDorsal,
            $this->tongueVentral,
            $this->tonguePharyngeal,
            $this->neurologicalChanges,
            $this->salivaryGrandExamination,
            $this->dentalChangesExamination,
            $this->probableDiagnosis,
            $this->difinitiveDiagnosis,
            $this->finalTreatmentPlan,
            $this->assistant,
            $this->master,
        );
    }

    public function prepareRows($rows)
    {
        return $rows->transform(function ($item) {
            return $item;
        });
    }

    public function map($item): array
    {
        return [
            $this->index++,
            $item->file_no,
            $item->first_visit_date,
            $item->name,
            $item->family,
            $item->national_no,
            $item->birth_date,
            $item->birth_place,
            $item->occupation,
            __('patient_file.gender_' . $item->gender),
            $item->maritial_status,
            $item->ethnicity,
            $item->education,
            $item->spouse_occupation,
            $item->spouse_relationship,
            $item->children_no,
            $item->tel,
            $item->mobile,
            $item->relative_mobile,
            $item->home_address,
            $item->work_address,
            $item->lesion_classification,
            $item->patient_referal,
            $item->special_lesion_classification,
            $item->chief_compliant,
            $item->chief_compliant_history,
            $item->time_interval,
            $item->referal_history,
            $item->treatment_history,
            $item->systemic_disease_history,
            $item->blood_disease_type,
            $item->hospitalization_reason,
            $item->continuing_drug,
            $item->weekly_drug,
            $item->cancer_type,
            $item->radiation_place,
            $item->pregnancy_week,
            $item->pregnancy_num,
            $item->pregnancy_rank,
            $item->ad_explanation,
            $item->sleep_status,
            $item->functional_capacity,
            $item->tobacco_use,
            $item->use_tobacco_duration,
            $item->assistant,
            $item->master,
        ];
    }
}
