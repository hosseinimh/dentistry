import * as yup from "yup";

import {
    emailValidator,
    nameValidator,
    stringValidator,
} from "../CommonValidators";
import {
    addUserPage as strings,
    validation,
} from "../../../constants/strings/fa";

const addUserSchema = yup.object().shape({
    username: stringValidator(yup.string(), strings.username, 6, 50),
    password: stringValidator(yup.string(), strings.password, 6, 50),
    confirmPassword: stringValidator(
        yup.string(),
        strings.confirmPassword
    ).oneOf(
        [yup.ref("password")],
        validation.confirmedMessage.replace(":field", strings.password)
    ),
    email: emailValidator(yup.string(), strings.email),
    name: nameValidator(yup.string(), strings.name),
    family: nameValidator(yup.string(), strings.family),
});

export default addUserSchema;
