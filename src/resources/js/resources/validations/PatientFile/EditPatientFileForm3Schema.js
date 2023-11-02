import * as yup from "yup";

import {
    conditionalStringValidator,
    stringValidator,
} from "../CommonValidators";
import { editPatientFileForm3 as strings } from "../../../constants/strings/fa";

const editPatientFileForm3Schema = yup.object().shape({
    item8Description: conditionalStringValidator(
        yup,
        strings.item8Description,
        "systemicDiseaseHistory",
        "item8",
        null,
        200
    ),
    item15Description: conditionalStringValidator(
        yup,
        strings.item15Description,
        "systemicDiseaseHistory",
        "item15",
        null,
        200
    ),
    item16Description: conditionalStringValidator(
        yup,
        strings.item16Description,
        "systemicDiseaseHistory",
        "item16",
        null,
        200
    ),
    item17Description: conditionalStringValidator(
        yup,
        strings.item17Description,
        "systemicDiseaseHistory",
        "item17",
        null,
        200
    ),
    item20Description: conditionalStringValidator(
        yup,
        strings.item20Description,
        "systemicDiseaseHistory",
        "item20",
        null,
        200
    ),
    item21Description: conditionalStringValidator(
        yup,
        strings.item21Description,
        "systemicDiseaseHistory",
        "item21",
        null,
        200
    ),
    item25_1Description: conditionalStringValidator(
        yup,
        strings.item25_1Description,
        "systemicDiseaseHistory",
        "item25",
        null,
        200
    ),
    item25_2Description: conditionalStringValidator(
        yup,
        strings.item25_2Description,
        "systemicDiseaseHistory",
        "item25",
        null,
        200
    ),
    item25_3Description: conditionalStringValidator(
        yup,
        strings.item25_3Description,
        "systemicDiseaseHistory",
        "item25",
        null,
        200
    ),
    item30Description: conditionalStringValidator(
        yup,
        strings.item30Description,
        "systemicDiseaseHistory",
        "item30",
        null,
        200
    ),
    item32Description: conditionalStringValidator(
        yup,
        strings.item32Description,
        "systemicDiseaseHistory",
        "item32",
        null,
        200
    ),
    item34Description: conditionalStringValidator(
        yup,
        strings.item34Description,
        "systemicDiseaseHistory",
        "item34",
        null,
        200
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
