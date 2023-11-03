import * as yup from "yup";

import {
    conditionalStringValidator,
    fileValidator,
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
    dentitionFile: fileValidator(
        yup.mixed(),
        strings.dentitionFile,
        4 * 1024 * 1024,
        ["jpg", "jpeg", "png"],
        false
    ),
    adultDmft: stringValidator(
        yup.string(),
        strings.adultDmft,
        null,
        200,
        false
    ),
    adultD: stringValidator(yup.string(), strings.adultD, null, 200, false),
    adultM: stringValidator(yup.string(), strings.adultM, null, 200, false),
    adultT: stringValidator(yup.string(), strings.adultT, null, 200, false),
    decidiousFile: fileValidator(
        yup.mixed(),
        strings.decidiousFile,
        4 * 1024 * 1024,
        ["jpg", "jpeg", "png"],
        false
    ),
    decidiousDmft: stringValidator(
        yup.string(),
        strings.decidiousDmft,
        null,
        200,
        false
    ),
    decidiousD: stringValidator(
        yup.string(),
        strings.decidiousD,
        null,
        200,
        false
    ),
    decidiousM: stringValidator(
        yup.string(),
        strings.decidiousM,
        null,
        200,
        false
    ),
    decidiousT: stringValidator(
        yup.string(),
        strings.decidiousT,
        null,
        200,
        false
    ),
    priodontalExamination: stringValidator(
        yup.string(),
        strings.priodontalExamination,
        null,
        200,
        false
    ),
    bop: stringValidator(yup.string(), strings.bop, null, 50),
    radiographicEvidence: stringValidator(
        yup.string(),
        strings.radiographicEvidence,
        null,
        300,
        false
    ),
    paraclinicalEvidence: stringValidator(
        yup.string(),
        strings.paraclinicalEvidence,
        null,
        300,
        false
    ),
    consultationDeps: stringValidator(
        yup.string(),
        strings.consultationDeps,
        null,
        300,
        false
    ),
    probableDiagnosis: stringValidator(
        yup.string(),
        strings.probableDiagnosis,
        null,
        300,
        false
    ),
    differntialDiagnosis: stringValidator(
        yup.string(),
        strings.differntialDiagnosis,
        null,
        300,
        false
    ),
    difinitiveDiagnosis: stringValidator(
        yup.string(),
        strings.difinitiveDiagnosis,
        null,
        300,
        false
    ),
    systemicConsiderations: stringValidator(
        yup.string(),
        strings.systemicConsiderations,
        null,
        300,
        false
    ),
});

export default editPatientFileForm4Schema;
