import md5 from "md5";
import { sessionUserSchema } from "../validations/users";
import validateSchema from "../validations/validateSchema";
import throwError from "../helpers/throwError";
import Token from "../utils/Token";
import users from "../models/users";

class Session {
    async create(req, res, next) {
        try {
            await validateSchema(req.body, sessionUserSchema, next);

            const user = await users.findOne({
                where: { email: req.body.email, password: md5(req.body.password), status: "active" },
            });

            if (!user) {
                return throwError(401, "Email or password is wrong", next);
            }

            const token = Token.create({ id_user: user.id_users, name: user.name, email: user.email });

            res.status(200).json({ status: "true", token, user });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new Session();
