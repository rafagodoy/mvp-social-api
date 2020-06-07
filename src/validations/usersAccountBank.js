import * as yup from "yup";

const userAccountSchema = yup.object().shape({
    id_banks: yup.number().integer().required(),
    agency: yup.string().required(),
    account: yup.string().required(),
    owner: yup.string().required(),
    cpf: yup
        .string()
        .matches(/^[0-9]+$/, "CPF allow only numbers")
        .max(11)
        .required(),
    digit_agency: yup.string().max(1).required(),
    digit_account: yup.string().max(1).required(),
    account_type: yup.string().required(),
});

export { userAccountSchema };
