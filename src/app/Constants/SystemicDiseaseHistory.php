<?php

namespace App\Constants;

use ReflectionClass;

abstract class SystemicDiseaseHistory
{
    const ITEM_1 = 'item_1';
    const ITEM_2 = 'item_2';
    const ITEM_3 = 'item_3';
    const ITEM_4 = 'item_4';
    const ITEM_5 = 'item_5';
    const ITEM_6 = 'item_6';
    const ITEM_7 = 'item_7';
    const ITEM_8 = 'item_8';
    const ITEM_9 = 'item_9';
    const ITEM_10 = 'item_10';
    const ITEM_11 = 'item_11';
    const ITEM_12 = 'item_12';
    const ITEM_13 = 'item_13';
    const ITEM_14 = 'item_14';
    const ITEM_15 = 'item_15';
    const ITEM_16 = 'item_16';
    const ITEM_17 = 'item_17';
    const ITEM_18 = 'item_18';
    const ITEM_19 = 'item_19';
    const ITEM_20 = 'item_20';
    const ITEM_21 = 'item_21';
    const ITEM_22 = 'item_22';
    const ITEM_23 = 'item_23';
    const ITEM_24 = 'item_24';
    const ITEM_25 = 'item_25';
    const ITEM_26 = 'item_26';
    const ITEM_27 = 'item_27';
    const ITEM_28 = 'item_28';
    const ITEM_29 = 'item_29';
    const ITEM_30 = 'item_30';
    const ITEM_31 = 'item_31';
    const ITEM_32 = 'item_32';

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
