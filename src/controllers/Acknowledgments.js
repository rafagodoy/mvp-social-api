import { acknowledgmentSchema } from "../validations/acknowledgments";
import validateSchema from "../validations/validateSchema";
import throwError from "../helpers/throwError";
import donations from "../models/donations";
import users from "../models/users";
import users_donations from "../models/users_donations";
import { Op } from "../config/sequelize";
import { date } from "yup";

class Acknowledgments {
    async update(req, res, next) {
        try {
            const { hasErrorValidation, error } = await validateSchema(req.body, acknowledgmentSchema, next);

            if (hasErrorValidation) {
                return throwError(400, error, next);
            }

            if (parseInt(req.params.idUsers) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You don't have permission for make this acknowledgment from this user", next);
            }

            if (
                !(await donations.findOne({
                    include: [
                        {
                            model: users_donations,
                            as: "UsersDonation",
                            where: { id_user_to: parseInt(req.headers.id_user) },
                        },
                    ],
                    where: { id_donations: parseInt(req.params.idDonations) },
                }))
            ) {
                return throwError(403, "The donation number doesn't exists", next);
            }

            donations.update(req.body, { where: { id_donations: req.params.idDonations } });

            res.status(200).json({ status: "Acknowledgments has been sent succesfully" });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new Acknowledgments();
