<?php

namespace App\Constants;

use ReflectionClass;

abstract class SystemicDiseaseHistory
{
    const HEART_DISEASE = "heart_disease";
    const NERVOUS_ILLNESS = "nervous_illness";
    const ABNORMAL_BLEEDING = "abnormal_bleeding";
    const ABNORMAL_BLOOD_PRESSURE = "abnormal_blood_pressure";
    const RESPIRATORY_DISEASE = "respiratory_disease";
    const HEPATIT_DISEASE = "hepatit_disease";
    const SINUSITIS = "sinusitis";
    const BLOOD_DISEASE = "blood_disease";
    const BLOOD_BORNE_DISEASE = "blood_borne_disease";
    const INJECTING_CONTAMINATED_BLOOD = "injecting_contaminated_blood";
    const EPILEPSY = "epilepsy";
    const KIDNEY_DISEASE = "kidney_disease";
    const DIABETES = "diabetes";
    const THYROID = "thyroid";
    const FM_ALLERGY = "fm_allergy";
    const HOSPITALIZATION_HISTORY = "hospitalization_history";
    const WEIGHT_LOSS = "weight_loss";
    const IMMUNE_DISEASE = "immune_disease";
    const CANCER = "cancer";
    const CHEMOTHERAPY = "chemotherapy";
    const BONE_DISEASE = "bone_disease";
    const SKIN_DISEASE = "skin_disease";
    const DIGESTIVE_DISEASE = "digestive_disease";
    const PREGNANCY = "pregnancy";
    const PMS = "pms";
    const TEMPOROMANDIBULAR = "temporomandibular";
    const DENTISTRY_PROBLEM = "dentistry_problem";
    const ADDICTION = "addiction";
    const ARTIFICIAL_DEVICE = "artificial_device";
    const BRUXISM = "bruxism";
    const HELP_LIVING = "help_living";

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
