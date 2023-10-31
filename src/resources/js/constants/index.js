import serverConfig from "../../../server-config.json";
import { MESSAGE_TYPES } from "./messageTypes";
import { MESSAGE_CODES } from "./messageCodes";
import { UPLOADED_FILE } from "./UploadedFile";
import { USER_ROLES } from "./userRoles";
import { NOTIFICATION_CATEGORIES } from "./notificationCategories";
import { NOTIFICATION_SUB_CATEGORIES } from "./notificationSubCategories";
import { USER_VERIFICATION_REJECT_REASON } from "./userVerificationRejectReason";
import { FILE_FORMS } from "./fileForms";
import { ETHNICITY_TYPES } from "./ethnicityTypes";
import { EDUCATION_TYPES } from "./educationTypes";
import { MARITIAL_STATUSES } from "./maritialStatuses";
import { GENDER_TYPES } from "./genderTypes";
import { LESION_CLASSIFICATION } from "./lesionClassification";
import { SPECIAL_LESION_CLASSIFICATION } from "./specialLesionClassification";
import {
    BASE_PATH,
    ASSETS_PATH,
    IMAGES_PATH,
    STORAGE_PATH,
    PAGE_ITEMS,
    THEMES,
    themes,
} from "./theme";

const BASE_URL = serverConfig.baseUrl;

export {
    BASE_URL,
    BASE_PATH,
    ASSETS_PATH,
    IMAGES_PATH,
    STORAGE_PATH,
    PAGE_ITEMS,
    THEMES,
    themes,
    MESSAGE_TYPES,
    MESSAGE_CODES,
    UPLOADED_FILE,
    USER_ROLES,
    NOTIFICATION_CATEGORIES,
    NOTIFICATION_SUB_CATEGORIES,
    USER_VERIFICATION_REJECT_REASON,
    FILE_FORMS,
    ETHNICITY_TYPES,
    EDUCATION_TYPES,
    MARITIAL_STATUSES,
    GENDER_TYPES,
    LESION_CLASSIFICATION,
    SPECIAL_LESION_CLASSIFICATION,
};
