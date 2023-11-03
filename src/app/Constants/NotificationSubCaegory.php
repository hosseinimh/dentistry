<?php

namespace App\Constants;

use ReflectionClass;

abstract class NotificationSubCaegory
{
    const LOGIN_SUCCEED = 111;
    const LOGIN_FAILED = 112;
    const SIGNUP_SUCCEED = 113;
    const USER_EMAIL_VERIFIED = 121;
    const USER_VERIFICATION_REQUESTED = 122;
    const USER_VERIFICATION_VERIFIED = 123;
    const USER_VERIFICATION_REJECTED = 124;

    public static function toArray()
    {
        $class = new ReflectionClass(__CLASS__);
        return $class->getConstants();
    }
}
