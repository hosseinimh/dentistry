<?php

namespace App\Constants;

use ReflectionClass;

abstract class Education
{
    const ILLITERATE = 'illiterate';
    const ELEMENTARY = 'elementary';
    const HIGH_SCHOOL = 'high_school';
    const DIPLOMA = 'diploma';
    const ASSOCIATE = 'associate';
    const BACHELOR = 'bachelor';
    const ABOVE_BACHELOR = 'above_bachelor';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
