<?php

namespace App\Exports;

use App\Services\PatientFileService;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PatientFilesExport implements FromQuery, WithMapping, WithHeadings, ShouldAutoSize
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

    public function headings(): array
    {
        return [
            __('patient_file.excel_row_no'),
            __('patient_file.excel_file_no'),
            __('patient_file.excel_first_visit_date'),
            __('patient_file.excel_name'),
            __('patient_file.excel_family'),
            __('patient_file.excel_assistant'),
            __('patient_file.excel_master'),
        ];
    }

    public function query()
    {
        $patientFileService = new PatientFileService();
        return $patientFileService->paginatedQuery($this->fileNo, $this->name, $this->family);
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
            $item->assistant,
            $item->master,
        ];
    }
}
