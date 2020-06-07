import { userAccountSchema } from "../validations/usersAccountBank";
import validateSchema from "../validations/validateSchema";
import throwError from "../helpers/throwError";
import usersAccount from "../models/users_account_bank";
import { Op } from "../config/sequelize";

class UserAccountBank {
    async create(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, userAccountSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            req.body = {
                ...req.body,
                id_users: parseInt(req.headers.id_user),
                agency: req.body.agency.concat("-", req.body.digit_agency),
                account: req.body.account.concat("-", req.body.digit_account),
            };

            if (
                await usersAccount.findOne({
                    where: {
                        [Op.or]: [{ cpf: req.body.cpf }, { id_users: req.body.id_users }],
                    },
                })
            ) {
                return throwError(403, "This user has a bank account registered", next);
            }

            if (
                await usersAccount.findOne({
                    where: {
                        [Op.and]: [{ agency: req.body.agency }, { account: req.body.account }],
                    },
                })
            ) {
                return throwError(403, "The account bank exists in database", next);
            }

            const newUserAccount = await usersAccount.create(req.body);

            res.status(200).json({ status: "true", message: newUserAccount });
        } catch (error) {
            throwError(500, error, next);
        }
    }

    async view(req, res, next) {
        try {
            if (
                !(await usersAccount.findOne({
                    where: { id_users: parseInt(req.headers.id_user), id_users_account_bank: parseInt(req.params.id) },
                }))
            ) {
                return throwError(403, "Error to request information", next);
            }

            const user = await usersAccount.findOne({ where: { id_users_account_bank: parseInt(req.params.id) } });

            res.status(200).json({ status: "true", msg: user });
        } catch (error) {
            throwError(500, error, next);
        }
    }

    async update(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, userAccountSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            if (
                !(await usersAccount.findOne({
                    where: { id_users: parseInt(req.headers.id_user), id_users_account_bank: parseInt(req.params.id) },
                }))
            ) {
                return throwError(403, "Error to request information", next);
            }

            req.body = {
                ...req.body,
                id_users: parseInt(req.headers.id_user),
                agency: req.body.agency.concat("-", req.body.digit_agency),
                account: req.body.account.concat("-", req.body.digit_account),
            };

            if (
                await usersAccount.findOne({
                    where: {
                        [Op.or]: [
                            {
                                [Op.and]: [
                                    { [Op.and]: [{ agency: req.body.agency }, { account: req.body.account }] },
                                    { id_users: { [Op.ne]: parseInt(req.headers.id_user) } },
                                ],
                            },
                            {
                                [Op.and]: [
                                    { cpf: req.body.cpf },
                                    { id_users: { [Op.ne]: parseInt(req.headers.id_user) } },
                                ],
                            },
                        ],
                    },
                })
            ) {
                return throwError(403, "The account bank exists in database", next);
            }

            await usersAccount.update(req.body, { where: { id_users: parseInt(req.headers.id_user) } });

            res.status(200).json({ status: "true", message: "User update successfully" });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new UserAccountBank();
