import * as yup from "yup";

import { dateValidator, stringValidator } from "../CommonValidators";
import { editPatientFollowUpPage as strings } from "../../../constants/strings/fa";

const editPatientFollowUpSchema = yup.object().shape({
    date: dateValidator(yup.string(), strings.date),
    result: stringValidator(yup.string(), strings.result, null, 1000),
});

export default editPatientFollowUpSchema;
