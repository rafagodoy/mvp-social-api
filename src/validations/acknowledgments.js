import * as yup from "yup";

const acknowledgmentSchema = yup.object().shape({
    acknowledgment: yup.string().required(),
});

export { acknowledgmentSchema };
