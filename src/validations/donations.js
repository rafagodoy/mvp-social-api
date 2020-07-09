import * as yup from "yup";

const donationsSchema = yup.object().shape({
    value_donation: yup.number().required(),
    note: yup.string(),
});

export { donationsSchema };
