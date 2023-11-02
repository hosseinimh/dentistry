import * as yup from "yup";

import {
    conditionalStringValidator,
    stringValidator,
} from "../CommonValidators";
import { editPatientFileForm4 as strings } from "../../../constants/strings/fa";

const editPatientFileForm4Schema = yup.object().shape({
    faceAssymetry: stringValidator(
        yup.string(),
        strings.faceAssymetry,
        null,
        300
    ),
    facePigmentation: stringValidator(
        yup.string(),
        strings.facePigmentation,
        null,
        300
    ),
    faceOtherPathalogical: stringValidator(
        yup.string(),
        strings.faceOtherPathalogical,
        null,
        300
    ),
    neckAssymetry: stringValidator(
        yup.string(),
        strings.neckAssymetry,
        null,
        300
    ),
    neckTyExamination: stringValidator(
        yup.string(),
        strings.neckTyExamination,
        null,
        300
    ),
    lymphNodes: stringValidator(yup.string(), strings.lymphNodes, null, 300),
    otherSignsTMJDescription: conditionalStringValidator(
        yup,
        strings.otherSignsTMJDescription,
        "tomporomandibularJoint",
        "otherSignsTMJ",
        null,
        200
    ),
    intraOralExamination: stringValidator(
        yup.string(),
        strings.intraOralExamination,
        null,
        300
    ),
    retromolarArea: stringValidator(
        yup.string(),
        strings.retromolarArea,
        null,
        300
    ),
    gums: stringValidator(yup.string(), strings.gums, null, 300),
    toothlessRidge: stringValidator(
        yup.string(),
        strings.toothlessRidge,
        null,
        300
    ),
    hardSoftPalate: stringValidator(
        yup.string(),
        strings.hardSoftPalate,
        null,
        300
    ),
    tongueDorsal: stringValidator(
        yup.string(),
        strings.tongueDorsal,
        null,
        300
    ),
    tongueVentral: stringValidator(
        yup.string(),
        strings.tongueVentral,
        null,
        300
    ),
    tonguePharyngeal: stringValidator(
        yup.string(),
        strings.tonguePharyngeal,
        null,
        300
    ),
    neurologicalChanges: stringValidator(
        yup.string(),
        strings.neurologicalChanges,
        null,
        300
    ),
    salivaryGrandExamination: stringValidator(
        yup.string(),
        strings.salivaryGrandExamination,
        null,
        300
    ),
    dentalChangesExamination: stringValidator(
        yup.string(),
        strings.dentalChangesExamination,
        null,
        300
    ),
});

export default editPatientFileForm4Schema;
