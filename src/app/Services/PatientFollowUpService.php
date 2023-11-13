<?php

namespace App\Services;

use App\Models\PatientFollowUp as Model;

class PatientFollowUpService
{
    public function get(int $id): mixed
    {
        return Model::where('id', $id)->first();
    }

    public function getPaginate(int $patientFileId, int $page, int $pageItems): mixed
    {
        return Model::where('patient_file_id', $patientFileId)->orderBy('created_at', 'DESC')->orderBy('id', 'DESC')->skip(($page - 1) * $pageItems)->take($pageItems)->get();
    }

    public function store(
        int $patientFileId,
        string $date,
        string $result,
    ): mixed {
        $date = substr($date, 0, 4) . "/" . substr($date, 4, 2) . "/" . substr($date, 6);
        $data = [
            'patient_file_id' => $patientFileId,
            'date' => $date ?? '',
            'result' => $result ?? '',

        ];
        return  Model::create($data) ?? null;
    }

    public function update(
        Model $model,
        string $date,
        string $result,
    ): mixed {
        $date = substr($date, 0, 4) . "/" . substr($date, 4, 2) . "/" . substr($date, 6);
        $data = [
            'date' => $date ?? '',
            'result' => $result ?? '',

        ];
        return $model->update($data);
    }

    public function delete(Model $model): bool
    {
        return $model->delete();
    }

    public function count(int $patientFileId,): int
    {
        return Model::where('patient_file_id', $patientFileId)->count();
    }
}
