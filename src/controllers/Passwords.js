import md5 from "md5";
import { updatePasswordSchema } from "../validations/password";
import validateSchema from "../validations/validateSchema";
import throwError from "../helpers/throwError";
import users from "../models/users";

class Password {
    async update(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, updatePasswordSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            if (parseInt(req.params.id) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You dont't have permission for change this password", next);
            }

            await users.update(
                { password: md5(req.body.password) },
                { where: { id_users: parseInt(req.headers.id_user) } }
            );

            res.status(200).json({ status: "true", message: "User password updated successfully" });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new Password();
