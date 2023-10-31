<?php

require __DIR__ . '/Helper/MessageHelper.php';

return [
    'file_no_required' => $requiredMessage('شماره پرونده'),
    'file_no_max' => $maxStringMessage('شماره پرونده', 50),
    'first_visit_date_required' => $requiredMessage('تاریخ اولین مراجعه'),
    'first_visit_date_numeric' => $numericMessage('تاریخ اولین مراجعه'),
    'first_visit_date_gte' => 'مقدار فیلد تاریخ اولین مراجعه باید برابر یا بزرگ‌تر از 1300/01/01 باشد.',
    'name_required' => $requiredMessage('نام'),
    'name_min' => $minStringMessage('نام', 2),
    'name_max' => $maxStringMessage('نام', 50),
    'family_required' => $requiredMessage('نام خانوادگی'),
    'family_min' => $minStringMessage('نام خانوادگی', 2),
    'family_max' => $maxStringMessage('نام خانوادگی', 50),
    'national_no_required' => $requiredMessage('شماره ملی'),
    'national_no_digits' => $digitsMessage('شماره ملی', 10),
    'birth_date_required' => $requiredMessage('تاریخ تولد'),
    'birth_date_numeric' => $numericMessage('تاریخ تولد'),
    'birth_date_gte' => 'مقدار فیلد تاریخ تولد باید برابر یا بزرگ‌تر از 1300/01/01 باشد.',
    'birth_place_max' => $maxStringMessage('محل تولد', 50),
    'occupation_max' => $maxStringMessage('حرفه', 50),
    'gender_required' => $requiredMessage('جنسیت'),
    'gender_in' => $validMessage('جنسیت'),
    'maritial_status_required' => $requiredMessage('جنسیت'),
    'maritial_status_in' => $validMessage('جنسیت'),
    'ethnicity_required' => $requiredMessage('قومیت'),
    'ethnicity_in' => $validMessage('قومیت'),
    'education_required' => $requiredMessage('مدرک تحصیلی'),
    'education_in' => $validMessage('مدرک تحصیلی'),
    'spouse_occupation_max' => $maxStringMessage('شغل همسر', 50),
    'spouse_relationship_max' => $maxStringMessage('نسبت فامیلی با همسر', 50),
    'children_no_required' => $requiredMessage('تعداد فرزندان'),
    'children_no_numeric' => $numericMessage('تعداد فرزندان'),
    'children_no_gte' => $gteNumericMessage('تعداد فرزندان', 0),
    'children_no_lte' => $lteNumericMessage('تعداد فرزندان', 15),
    'tel_max' => $maxStringMessage('شماره تلفن', 50),
    'mobile_max' => $maxStringMessage('تلفن همراه', 50),
    'relative_mobile_max' => $maxStringMessage('تلفن همراه یکی از نزدیکان', 50),
    'home_address_max' => $maxStringMessage('آدرس منزل', 300),
    'work_address_max' => $maxStringMessage('آدرس محل کار', 300),
    'lesion_classification_in' => $validMessage('طبقه‌بندی ضایعه دهان، فک و صورت'),
    'patient_referal_required' => $requiredMessage('فرد ارجاع‌دهنده بیمار'),
    'patient_referal_in' => $validMessage('فرد ارجاع‌دهنده بیمار'),
    'special_lesion_classification_in' => $validMessage('طبقه‌بندی اختصاصی برای ضایعات خاص'),
    'chief_compliant_max' => $maxStringMessage('شکایت اصلی بیمار', 300),
    'chief_compliant_history_max' => $maxStringMessage('تاریخ‌چه شکایت اصلی بیمار', 300),
    'time_interval_max' => $maxStringMessage('فاصله زمانی بین توجه به مشکل و اولین مراجعه به پزشک / دندانپزشک', 300),
    'referal_history_max' => $maxStringMessage('تاریخ‌چه ارجاع به پزشکان / دندانپزشکان همراه با شرح تخصص آن‌ها', 300),
    'treatment_history_max' => $maxStringMessage('تاریخ‌چه اقدامات درمانی انجام‌شده', 300),
    'file_no_unique' => 'این شماره پرونده قبلا ثبت شده است.',
];
