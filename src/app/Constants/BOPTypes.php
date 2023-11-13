<?php

namespace App\Constants;

use ReflectionClass;

abstract class BOPTypes
{
    const LES_TEN = "less_ten";
    const BETWEEN_TEN_THIRTY = "between_ten_thirty";
    const MORE_THIRTY = "more_thirty";

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
