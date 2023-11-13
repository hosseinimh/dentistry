import * as yup from "yup";

import { fileValidator, stringValidator } from "../CommonValidators";
import { addRadiographicEvidencePage as strings } from "../../../constants/strings/fa";

const addRadiographicEvidenceSchema = yup.object().shape({
    radiographicEvidence: stringValidator(
        yup.string(),
        strings.radiographicEvidence,
        null,
        1000
    ),
    fileDocumentFilesModal: fileValidator(
        yup.mixed(),
        strings.fileDocumentFilesModal,
        4 * 1024 * 1024,
        ["jpg", "jpeg", "png"],
        false
    ),
});

export default addRadiographicEvidenceSchema;
