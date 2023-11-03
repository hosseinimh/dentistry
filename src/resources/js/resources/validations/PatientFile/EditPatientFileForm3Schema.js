import * as yup from "yup";

import {
    conditionalStringValidator,
    stringValidator,
} from "../CommonValidators";
import { editPatientFileForm3 as strings } from "../../../constants/strings/fa";

const editPatientFileForm3Schema = yup.object().shape({
    bloodDiseaseType: conditionalStringValidator(
        yup,
        strings.bloodDiseaseType,
        "systemicDiseaseHistory",
        "blood_disease",
        null,
        200
    ),
    hospitalizationReason: conditionalStringValidator(
        yup,
        strings.hospitalizationReason,
        "systemicDiseaseHistory",
        "hospitalization_history",
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
        "artificial_device",
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
    pulse: stringValidator(yup.string(), strings.pulse, null, 200, false),
    bodyTemp: stringValidator(yup.string(), strings.bodyTemp, null, 200, false),
    bloodPressure: stringValidator(
        yup.string(),
        strings.bloodPressure,
        null,
        200,
        false
    ),
    resporate: stringValidator(
        yup.string(),
        strings.resporate,
        null,
        200,
        false
    ),
    weight: stringValidator(yup.string(), strings.weight, null, 200, false),
    height: stringValidator(yup.string(), strings.height, null, 200, false),
    bmi: stringValidator(yup.string(), strings.bmi, null, 200, false),
    fcaType: conditionalStringValidator(
        yup,
        strings.fcaType,
        "familialHistory",
        "fca",
        null,
        200
    ),
});

export default editPatientFileForm3Schema;
