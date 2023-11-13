import * as yup from "yup";

import { dateValidator, stringValidator } from "../CommonValidators";
import { addPatientFollowUpPage as strings } from "../../../constants/strings/fa";

const addPatientFollowUpSchema = yup.object().shape({
    date: dateValidator(yup.string(), strings.date),
    result: stringValidator(yup.string(), strings.result, null, 1000),
});

export default addPatientFollowUpSchema;
