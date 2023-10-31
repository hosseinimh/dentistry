<?php

namespace App\Constants;

use ReflectionClass;

abstract class PatientReferal
{
    const PATIENT = 'patient';
    const RELATIVES = 'relatives';
    const GENERAL_PRACTITIONER = 'general_practitioner';
    const GENERAL_DENTIST = 'general_dentist';
    const SPECIALIST = 'specialist';
    const SPECIALIST_DENTIST = 'specialit_dentist';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
