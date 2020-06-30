import md5 from "md5";
import { registerUserSchema, updateUserSchema } from "../validations/users";
import validateSchema from "../validations/validateSchema";
import throwError from "../helpers/throwError";
import users from "../models/users";
import { Op } from "../config/sequelize";

class Users {
    async create(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, registerUserSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            if (await users.findOne({ where: { email: req.body.email } })) {
                return throwError(403, "Email exists in database", next);
            }

            const user = await users.create({ ...req.body, password: md5(req.body.password) });

            res.status(200).json({ status: "true", user });
        } catch (error) {
            throwError(500, error, next);
        }
    }

    async view(req, res, next) {
        try {
            if (parseInt(req.params.id) !== parseInt(req.headers.id_user)) {
                return throwError(403, "Error to request information", next);
            }

            const user = await users.findOne({ where: { id_users: req.headers.id_user } });

            res.status(200).json({ status: "true", user });
        } catch (error) {
            throwError(500, error, next);
        }
    }

    async update(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, updateUserSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            if (parseInt(req.params.id) !== parseInt(req.headers.id_user)) {
                return throwError(403, "Error to request information", next);
            }

            if (
                await users.findOne({
                    where: {
                        [Op.and]: [{ email: req.body.email }, { id_users: { [Op.ne]: parseInt(req.headers.id_user) } }],
                    },
                })
            ) {
                return throwError(403, "Email exists in database", next);
            }

            await users.update(req.body, { where: { id_users: parseInt(req.headers.id_user) } });

            res.status(200).json({ status: "true", message: "User update successfully" });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new Users();
