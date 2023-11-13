<?php

namespace App\Http\Controllers\User;

use App\Exports\PatientFilesExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\PatientFile\IndexPatientFilesRequest;
use App\Packages\JsonResponse;
use App\Models\PatientFile as Model;
use App\Services\PatientFileService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;
use Maatwebsite\Excel\Excel;

class PatientFileController extends Controller
{
    public function __construct(JsonResponse $response, public PatientFileService $service)
    {
        parent::__construct($response);
    }

    public function index(IndexPatientFilesRequest $request): HttpJsonResponse
    {
        return $this->onItems($this->service->getPaginate($request->file_no, $request->name, $request->family, $request->_pn, $request->_pi), $this->service->count($request->file_no, $request->name, $request->family));
    }

    public function show(Model $model): HttpJsonResponse
    {
        return $this->onItem($this->service->get($model->id));
    }

    public function excel(IndexPatientFilesRequest $request, Excel $excel)
    {
        $patientFileExport = new PatientFilesExport($request->file_no, $request->name, $request->family);
        return $excel->download($patientFileExport, 'patient_files.xlsx');
    }
}
