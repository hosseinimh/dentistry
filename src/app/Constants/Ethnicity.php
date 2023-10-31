<?php

namespace App\Constants;

use ReflectionClass;

abstract class Ethnicity
{
    const FARS = 'fars';
    const LOR = 'lor';
    const KORD = 'kord';
    const TORK = 'tork';
    const ARAB = 'arab';
    const BALOUCH = 'balouch';
    const OTHER = 'other';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
