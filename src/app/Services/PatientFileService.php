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
