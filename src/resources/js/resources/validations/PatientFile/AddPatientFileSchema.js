import * as yup from "yup";

import {
    dateValidator,
    nameValidator,
    nationalNoValidator,
    numberValidator,
    stringValidator,
} from "../CommonValidators";
import { addPatientFilePage as strings } from "../../../constants/strings/fa";

const addPatientFileSchema = yup.object().shape({
    fileNo: stringValidator(yup.string(), strings.fileNo, null, 50),
    firstVisitDate: dateValidator(yup.string(), strings.firstVisitDate),
    name: nameValidator(yup.string(), strings.name, 2, 50),
    family: nameValidator(yup.string(), strings.family, 2, 50),
    nationalNo: nationalNoValidator(yup.string(), strings.nationalNo),
    birthDate: dateValidator(yup.string(), strings.birthDate),
    birthPlace: stringValidator(
        yup.string(),
        strings.birthPlace,
        null,
        50,
        false
    ),
    occupation: stringValidator(
        yup.string(),
        strings.occupation,
        null,
        50,
        false
    ),
    gender: stringValidator(yup.string(), strings.gender, null, 50),
    maritialStatus: stringValidator(
        yup.string(),
        strings.maritialStatus,
        null,
        50
    ),
    ethnicity: stringValidator(yup.string(), strings.ethnicity, null, 50),
    education: stringValidator(yup.string(), strings.education, null, 50),
    spouseOccupation: stringValidator(
        yup.string(),
        strings.spouseOccupation,
        null,
        50,
        false
    ),
    spouseRelationship: stringValidator(
        yup.string(),
        strings.spouseRelationship,
        null,
        50,
        false
    ),
    childrenNo: numberValidator(yup.string(), strings.childrenNo, 0, 15),
    tel: stringValidator(yup.string(), strings.tel, null, 50, false),
    mobile: stringValidator(yup.string(), strings.mobile, null, 50, false),
    relativeMobile: stringValidator(
        yup.string(),
        strings.relativeMobile,
        null,
        50,
        false
    ),
    homeAddress: stringValidator(
        yup.string(),
        strings.homeAddress,
        null,
        300,
        false
    ),
    workAddress: stringValidator(
        yup.string(),
        strings.workAddress,
        null,
        300,
        false
    ),
});

export default addPatientFileSchema;
