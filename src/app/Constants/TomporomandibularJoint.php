<?php

namespace App\Constants;

use ReflectionClass;

abstract class TomporomandibularJoint
{
    const RESTRICTION_IN_OPENING = 'restriction_in_opening';
    const PAIN_OR_DEVIATION = 'pain_or_deviation';
    const JOINT_SOUND = 'joint_sound';
    const OTHER_SIGNS_TMJ = 'other_signs_tmj';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
