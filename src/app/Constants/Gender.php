<?php

namespace App\Constants;

use ReflectionClass;

abstract class Gender
{
    const MALE = 'male';
    const FEMALE = 'female';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
