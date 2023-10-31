<?php

namespace App\Constants;

use ReflectionClass;

abstract class MaritialStatus
{
    const MARRIED = 'married';
    const SINGLE = 'single';
    const WIDOW = 'widow';
    const DIVORCED = 'divorced';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
