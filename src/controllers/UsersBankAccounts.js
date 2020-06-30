import { userAccountSchema } from "../validations/usersAccountBank";
import validateSchema from "../validations/validateSchema";
import throwError from "../helpers/throwError";
import usersBankAccounts from "../models/users_bank_accounts";
import { Op } from "../config/sequelize";

class UsersBankAccounts {
    async create(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, userAccountSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            if (parseInt(req.params.idUsers) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You dont't have permission for change this account bank", next);
            }

            req.body = {
                ...req.body,
                id_users: parseInt(req.headers.id_user),
                agency: req.body.agency.concat("-", req.body.digit_agency),
                account: req.body.account.concat("-", req.body.digit_account),
            };

            if (
                await usersBankAccounts.findOne({
                    where: {
                        [Op.or]: [{ cpf: req.body.cpf }, { id_users: req.body.id_users }],
                    },
                })
            ) {
                return throwError(403, "This user has a bank account registered", next);
            }

            if (
                await usersBankAccounts.findOne({
                    where: {
                        [Op.and]: [{ agency: req.body.agency }, { account: req.body.account }],
                    },
                })
            ) {
                return throwError(403, "The account bank exists in database", next);
            }

            const userBankAccount = await usersBankAccounts.create(req.body);

            res.status(200).json({ status: "true", userBankAccount });
        } catch (error) {
            throwError(500, error, next);
        }
    }

    async view(req, res, next) {
        try {
            if (parseInt(req.params.idUsers) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You dont't have permission for view this bank account", next);
            }

            if (
                !(await usersBankAccounts.findOne({
                    where: {
                        id_users: parseInt(req.params.idUsers),
                        id_users_bank_accounts: parseInt(req.params.idBankAccounts),
                    },
                }))
            ) {
                return throwError(403, "You dont't have permission for view this bank account", next);
            }

            const userBankAccount = await usersBankAccounts.findOne({
                where: { id_users_bank_accounts: parseInt(req.params.idBankAccounts) },
            });

            res.status(200).json({ status: "true", userBankAccount });
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

            if (parseInt(req.params.idUsers) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You dont't have permission for view this bank account", next);
            }

            if (
                !(await usersBankAccounts.findOne({
                    where: {
                        id_users: parseInt(req.params.idUsers),
                        id_users_bank_accounts: parseInt(req.params.idBankAccounts),
                    },
                }))
            ) {
                return throwError(403, "You dont't have permission for view this bank account", next);
            }

            req.body = {
                ...req.body,
                id_users: parseInt(req.headers.id_user),
                agency: req.body.agency.concat("-", req.body.digit_agency),
                account: req.body.account.concat("-", req.body.digit_account),
            };

            if (
                await usersBankAccounts.findOne({
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

            await usersBankAccounts.update(req.body, { where: { id_users: parseInt(req.headers.id_user) } });

            res.status(200).json({ status: "true", message: "User update successfully" });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new UsersBankAccounts();
