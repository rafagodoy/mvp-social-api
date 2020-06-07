import * as yup from "yup";

const registerUserSchema = yup.object().shape({
    name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    password_confirm: yup
        .string()
        .required()
        .oneOf([yup.ref("password")], "password doesn't match"),
    type_user: yup.string().required(),
});

const updateUserSchema = yup.object().shape({
    name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().integer().required(),
    have_sons: yup.boolean().required(),
    amount_sons: yup.number().integer(),
    marital_state: yup.string().required(),
    short_profile_description: yup.string().required(),
    complete_profile_description: yup.string().required(),
});

const sessionUserSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export { registerUserSchema, updateUserSchema, sessionUserSchema };
