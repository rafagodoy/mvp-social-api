import { userAddressSchema } from "../validations/usersAddress";
import validateSchema from "../validations/validateSchema";
import throwError from "../helpers/throwError";
import usersAddress from "../models/users_address";
import { Op } from "../config/sequelize";

class UserAccountBank {
    async create(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, userAddressSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            req.body = {
                ...req.body,
                id_users: parseInt(req.headers.id_user),
            };

            if (await usersAddress.findOne({ where: { id_users: req.body.id_users } })) {
                return throwError(403, "This user has a address registered", next);
            }

            const newUserAddress = await usersAddress.create(req.body);

            res.status(200).json({ status: "true", message: newUserAddress });
        } catch (error) {
            throwError(500, error, next);
        }
    }

    async view(req, res, next) {
        try {
            if (
                !(await usersAddress.findOne({
                    where: { id_users: parseInt(req.headers.id_user), id_users_address: parseInt(req.params.id) },
                }))
            ) {
                return throwError(403, "Error to request information", next);
            }

            const user = await usersAddress.findOne({ where: { id_users_address: parseInt(req.params.id) } });

            res.status(200).json({ status: "true", msg: user });
        } catch (error) {
            throwError(500, error, next);
        }
    }

    async update(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, userAddressSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            if (
                !(await usersAddress.findOne({
                    where: { id_users: parseInt(req.headers.id_user), id_users_address: parseInt(req.params.id) },
                }))
            ) {
                return throwError(403, "Error to request information", next);
            }

            req.body = {
                ...req.body,
                id_users: parseInt(req.headers.id_user),
            };

            await usersAddress.update(req.body, { where: { id_users_address: parseInt(req.params.id) } });

            res.status(200).json({ status: "true", message: "User update successfully" });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new UserAccountBank();
