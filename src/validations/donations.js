import * as yup from "yup";

const donationsSchema = yup.object().shape({
    id_user_to: yup.number().integer().required(),
    value_donation: yup.number().required(),
    note: yup.string(),
});

export { donationsSchema };
