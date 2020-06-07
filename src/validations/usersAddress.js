import * as yup from "yup";

const userAddressSchema = yup.object().shape({
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string().required(),
    neighborhood: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    short_state_name: yup.string().max(2).required(),
});

export { userAddressSchema };
