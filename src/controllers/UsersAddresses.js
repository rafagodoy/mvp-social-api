import { userAddressSchema } from "../validations/usersAddress";
import validateSchema from "../validations/validateSchema";
import throwError from "../helpers/throwError";
import usersAddresses from "../models/users_addresses";

class UsersAddresses {
    async create(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, userAddressSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            if (parseInt(req.params.idUsers) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You dont't have permission for change this address", next);
            }

            req.body = {
                ...req.body,
                id_users: parseInt(req.headers.id_user),
            };

            if (await usersAddresses.findOne({ where: { id_users: req.body.id_users } })) {
                return throwError(403, "This user has a address registered", next);
            }

            const userAddress = await usersAddresses.create(req.body);

            res.status(200).json({ status: "true", userAddress });
        } catch (error) {
            throwError(500, error, next);
        }
    }

    async view(req, res, next) {
        try {
            if (parseInt(req.params.idUsers) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You dont't have permission for view this address", next);
            }

            if (
                !(await usersAddresses.findOne({
                    where: {
                        id_users: parseInt(req.params.idUsers),
                        id_users_addresses: parseInt(req.params.idUsersAddresses),
                    },
                }))
            ) {
                return throwError(403, "You dont't have permission for view this address", next);
            }

            const userAddress = await usersAddresses.findOne({
                where: { id_users_addresses: parseInt(req.params.idUsersAddresses) },
            });

            res.status(200).json({ status: "true", userAddress });
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

            if (parseInt(req.params.idUsers) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You dont't have permission for update this address", next);
            }

            if (
                !(await usersAddresses.findOne({
                    where: {
                        id_users: parseInt(req.params.idUsers),
                        id_users_addresses: parseInt(req.params.idUsersAddresses),
                    },
                }))
            ) {
                return throwError(403, "You dont't have permission for update this address", next);
            }

            req.body = {
                ...req.body,
                id_users: parseInt(req.headers.id_user),
            };

            await usersAddresses.update(req.body, {
                where: { id_users_addresses: parseInt(req.params.idUsersAddresses) },
            });

            res.status(200).json({ status: "true", message: "User update successfully" });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new UsersAddresses();
