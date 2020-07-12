import throwError from "../helpers/throwError";
import cashier from "../models/cashier";

class Cashier {
    async update(req, res, next) {
        try {
            if (parseInt(req.params.id) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You don't have permission for transfer money from this user", next);
            }

            cashier.update(
                { status: "transfered", date_last_update: new Date() },
                { where: { id_users: req.headers.id_user, status: "pending" } }
            );

            res.status(200).json({ status: "User cashier has been updated succesfully" });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new Cashier();
