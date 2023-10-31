<?php

namespace App\Constants;

use ReflectionClass;

abstract class LesionClassification
{
    const ULCER = 'ulcer';
    const CENTRAL_LESION = 'central_lesion';
    const NATURAL_CHANGES = 'natural_changes';
    const PAIN_DISTURBANCE = 'pain_disturbance';
    const WHITE_LESION = 'white_lesion';
    const INFECTIOUS_LESION = 'infectious_lesion';
    const DENTAL_CHANGES = 'dental_changes';
    const TEMPOROMANDIBULAR_DISTURBANCE = 'temporomandibular_disturbance';
    const PIGMANTED_LESION = 'pigmanted_lesion';
    const GINGIVAL_HYPERPLASIA = 'gingival_hyperplasia';
    const SYNDROME = 'syndrome';
    const CERVICAL_LUMPS = 'cervical_lumps';
    const PROMINENT_LESION = 'prominent_lesion';
    const SALLIVARY_LESION = 'salivary_lesion';
    const COMPLICATED_DISEASE = 'complicated_disease';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
