import throwError from "../helpers/throwError";
import users from "../models/users";
import { Op } from "../config/sequelize";

class Beneficents {
    async index(req, res, next) {
        console.log("ola");
        try {
            if (
                !(await users.findOne({
                    where: { id_users: req.headers.id_user, type_user: "donator", status: "active" },
                }))
            ) {
                return throwError(403, "You need be a donator user for list beneficents", next);
            }

            const beneficents = await users.findAll({
                attributes: ["id_users", "name", "last_name", "age", "complete_profile_description"],
                where: { type_user: "beneficent", status: "active" },
            });

            res.status(200).json({ status: "true", beneficents });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new Beneficents();
