import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import { editPatientFileForm3 as strings } from "../../../constants/strings/fa";

const editPatientFileForm3Schema = yup.object().shape({
    patientReferal: stringValidator(
        yup.string(),
        strings.patientReferal,
        null,
        50
    ),
});

export default editPatientFileForm3Schema;
