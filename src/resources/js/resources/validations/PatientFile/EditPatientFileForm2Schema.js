import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import { editPatientFileForm2 as strings } from "../../../constants/strings/fa";

const editPatientFileForm2Schema = yup.object().shape({
    patientReferal: stringValidator(
        yup.string(),
        strings.patientReferal,
        null,
        50
    ),
    chiefCompliant: stringValidator(
        yup.string(),
        strings.chiefCompliant,
        null,
        300,
        false
    ),
    chiefCompliantHistory: stringValidator(
        yup.string(),
        strings.chiefCompliantHistory,
        null,
        300,
        false
    ),
    timeInterval: stringValidator(
        yup.string(),
        strings.timeInterval,
        null,
        300,
        false
    ),
    referalHistory: stringValidator(
        yup.string(),
        strings.referalHistory,
        null,
        300,
        false
    ),
    treatmentHistory: stringValidator(
        yup.string(),
        strings.treatmentHistory,
        null,
        300,
        false
    ),
});

export default editPatientFileForm2Schema;
