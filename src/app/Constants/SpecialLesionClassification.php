<?php

namespace App\Constants;

use ReflectionClass;

abstract class SpecialLesionClassification
{
    const ORAL_LICHEN = 'oral_lichen';
    const SCC = 'scc';
    const APHTHOUS = 'aphthous';
    const MRONJ = 'mronj';
    const SJOGRENS_SYNDROME = 'sjogrens_syndrome';
    const RHEUMATOID_ARTHRITIS = 'rheumatoid_arthritis';
    const CANCER_IN_O_PLACE = 'cancer_in_o_place';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
