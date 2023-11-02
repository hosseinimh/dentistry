<?php

namespace App\Constants;

use ReflectionClass;

abstract class FamilialHistory
{
    const TB = 'tb';
    const FDB = 'fdb';
    const FHP = 'fhp';
    const FHDP = 'fhdp';
    const FCA = 'fca';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
