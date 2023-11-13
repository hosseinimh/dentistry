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

    public function __construct(private ?string $fileNo, private ?string $name, private  ?string $family)
    {
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
        ];
    }
}
