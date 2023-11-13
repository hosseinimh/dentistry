<?php

namespace App\Services;

use App\Constants\Theme;
use App\Models\RadiographicEvidence as Model;

class RadiographicEvidenceService
{
    public function get(int $id): mixed
    {
        return Model::where('id', $id)->first();
    }

    public function getPaginate(int $patientFileId, int $page = 1, int $pageItems = Theme::ITEMS_PER_PAGE): mixed
    {
        return Model::where('patient_file_id', $patientFileId)->orderBy('created_at', 'DESC')->orderBy('id', 'DESC')->skip(($page - 1) * $pageItems)->take($pageItems)->get();
    }

    public function store(
        int $patientFileId,
        string $radiographicEvidence,
    ): mixed {
        $data = [
            'patient_file_id' => $patientFileId,
            'radiographic_evidence' => $radiographicEvidence ?? '',

        ];
        return  Model::create($data) ?? null;
    }

    public function update(
        Model $model,
        string $radiographicEvidence,
    ): mixed {
        $data = [
            'radiographic_evidence' => $radiographicEvidence ?? '',

        ];
        return $model->update($data);
    }

    public function delete(Model $model): bool
    {
        if ($model->path) {
            @unlink(storage_path('app') . '/public/storage/p_files/radiographic_evidence/' . $model->path);
        }
        return $model->delete();
    }

    public function count(int $patientFileId,): int
    {
        return Model::where('patient_file_id', $patientFileId)->count();
    }
}
