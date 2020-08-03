import throwError from "../helpers/throwError";
import users from "../models/users";

class Avatars {
    async update(req, res, next) {
        try {
            if (parseInt(req.params.id) !== parseInt(req.headers.id_user)) {
                return throwError(403, "You don't have permission for change this user profile", next);
            }

            if (
                !(await users.findOne({
                    where: { id_users: req.params.id, status: "active" },
                }))
            ) {
                return throwError(403, "This user is disable or doesn't exist", next);
            }

            await users.update({ photo_profile: req.headers.avatar_name }, { where: { id_users: req.params.id } });

            res.status(200).json({
                status: "true",
                user: { id_users: req.params.id, url_avatar: req.headers.avatar_name },
            });
        } catch (error) {
            throwError(500, error, next);
        }
    }
}

export default new Avatars();
