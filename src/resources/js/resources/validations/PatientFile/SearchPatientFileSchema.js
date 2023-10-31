import * as yup from "yup";

import { patientFilesPage as strings } from "../../../constants/strings/fa";
import { nameValidator, stringValidator } from "../CommonValidators";

const searchPatientFileSchema = yup.object().shape({
    fileNo: stringValidator(yup.string(), strings.fileNo, null, 50, false),
    name: nameValidator(yup.string(), strings.name, null, 50, false),
    family: nameValidator(yup.string(), strings.family, null, 50, false),
});

export default searchPatientFileSchema;
