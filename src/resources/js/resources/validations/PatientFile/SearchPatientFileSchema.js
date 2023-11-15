import * as yup from "yup";

import { patientFilesPage as strings } from "../../../constants/strings/fa";
import {
    conditionalStringValidator,
    dateValidator,
    nameValidator,
    stringValidator,
} from "../CommonValidators";

const searchPatientFileSchema = yup.object().shape({
    fileNo: stringValidator(yup.string(), strings.fileNo, null, 50, false),
    name: nameValidator(yup.string(), strings.name, null, 50, false),
    family: nameValidator(yup.string(), strings.family, null, 50, false),
    birthDate: dateValidator(yup.string(), strings.birthDate, false),
    bloodDiseaseType: conditionalStringValidator(
        yup,
        strings.bloodDiseaseType,
        "systemicDiseaseHistory",
        "bloodDisease",
        null,
        200
    ),
    hospitalizationReason: conditionalStringValidator(
        yup,
        strings.hospitalizationReason,
        "systemicDiseaseHistory",
        "hospitalizationHistory",
        null,
        200
    ),
    continuingDrug: stringValidator(
        yup.string(),
        strings.continuingDrug,
        null,
        200,
        false
    ),
    weeklyDrug: stringValidator(
        yup.string(),
        strings.weeklyDrug,
        null,
        200,
        false
    ),
    cancerType: conditionalStringValidator(
        yup,
        strings.cancerType,
        "systemicDiseaseHistory",
        "cancer",
        null,
        200
    ),
    radiationPlace: conditionalStringValidator(
        yup,
        strings.radiationPlace,
        "systemicDiseaseHistory",
        "chemotherapy",
        null,
        200
    ),
    pregnancyWeek: conditionalStringValidator(
        yup,
        strings.pregnancyWeek,
        "systemicDiseaseHistory",
        "pregnancy",
        null,
        200
    ),
    pregnancyNum: conditionalStringValidator(
        yup,
        strings.pregnancyNum,
        "systemicDiseaseHistory",
        "pregnancy",
        null,
        200
    ),
    pregnancyRank: conditionalStringValidator(
        yup,
        strings.pregnancyRank,
        "systemicDiseaseHistory",
        "pregnancy",
        null,
        200
    ),
    adExplanation: conditionalStringValidator(
        yup,
        strings.adExplanation,
        "systemicDiseaseHistory",
        "artificialDevice",
        null,
        200
    ),
    sleepStatus: stringValidator(
        yup.string(),
        strings.sleepStatus,
        null,
        200,
        false
    ),
    functionalCapacity: stringValidator(
        yup.string(),
        strings.functionalCapacity,
        null,
        200,
        false
    ),
    useTobaccoDuration: conditionalStringValidator(
        yup,
        strings.useTobaccoDuration,
        "tobaccoUse",
        "tobaccoUse",
        null,
        200
    ),
    useTobaccoType: conditionalStringValidator(
        yup,
        strings.useTobaccoType,
        "tobaccoUse",
        "tobaccoUse",
        null,
        200
    ),
    useDrugDuration: conditionalStringValidator(
        yup,
        strings.useDrugDuration,
        "drugUse",
        "drugUse",
        null,
        200
    ),
    useDrugType: conditionalStringValidator(
        yup,
        strings.useDrugType,
        "drugUse",
        "drugUse",
        null,
        200
    ),
    retromolarArea: stringValidator(
        yup.string(),
        strings.retromolarArea,
        null,
        300,
        false
    ),
    gums: stringValidator(yup.string(), strings.gums, null, 300, false),
    toothlessRidge: stringValidator(
        yup.string(),
        strings.toothlessRidge,
        null,
        300,
        false
    ),
    hardSoftPalate: stringValidator(
        yup.string(),
        strings.hardSoftPalate,
        null,
        300,
        false
    ),
    tongueDorsal: stringValidator(
        yup.string(),
        strings.tongueDorsal,
        null,
        300,
        false
    ),
    tongueVentral: stringValidator(
        yup.string(),
        strings.tongueVentral,
        null,
        300,
        false
    ),
    tonguePharyngeal: stringValidator(
        yup.string(),
        strings.tonguePharyngeal,
        null,
        300,
        false
    ),
    neurologicalChanges: stringValidator(
        yup.string(),
        strings.neurologicalChanges,
        null,
        300,
        false
    ),
    salivaryGrandExamination: stringValidator(
        yup.string(),
        strings.salivaryGrandExamination,
        null,
        300,
        false
    ),
    dentalChangesExamination: stringValidator(
        yup.string(),
        strings.dentalChangesExamination,
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
    difinitiveDiagnosis: stringValidator(
        yup.string(),
        strings.difinitiveDiagnosis,
        null,
        300,
        false
    ),
    finalTreatmentPlan: stringValidator(
        yup.string(),
        strings.finalTreatmentPlan,
        null,
        1000,
        false
    ),
    assistant: stringValidator(
        yup.string(),
        strings.assistant,
        null,
        200,
        false
    ),
    master: stringValidator(yup.string(), strings.master, null, 200, false),
});

export default searchPatientFileSchema;
