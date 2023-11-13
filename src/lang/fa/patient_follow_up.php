<?php

require __DIR__ . '/Helper/MessageHelper.php';

return [
    'date_required' => $requiredMessage('تاریخ'),
    'date_numeric' => $numericMessage('تاریخ'),
    'date_gte' => 'مقدار فیلد تاریخ باید برابر یا بزرگ‌تر از 1300/01/01 باشد.',
    'result_required' => $requiredMessage('نتیجه پیگیری'),
    'result_max' => $maxStringMessage('نتیجه پیگیری', 1000),
];
