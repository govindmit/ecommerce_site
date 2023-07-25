import * as Yup from "yup";
import { emailRegex, nameRegex, passwordRegex, phoneRegex } from "./commonRegexValidation";

export const authValidations = Yup.object().shape({
    name: Yup.string()
        .required("Field is required*")
        .min(3, "Name must be at least 3 characters*")
        .matches(nameRegex, "Please enter valid name*"),
    contact: Yup.string().required("Field is required*")
        .min(10, "Contact must be 10 digit*")
        .max(10, "Contact must be 10 digit*")
        .matches(phoneRegex, "Please enter valid contact number*"),
    email:
        Yup.string().required('Email is a required field*')
            .matches(emailRegex, "Email must be a valid email*")
            .email("Email must be a valid email*"),
    password:
        Yup.string().required('Password is a required field*')
            .min(8, 'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special character*')
            .matches(passwordRegex, { message: "Password must have at least one of each: uppercase, lowercase, number and special character*" }),
});
