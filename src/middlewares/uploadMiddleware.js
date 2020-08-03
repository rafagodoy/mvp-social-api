import upload from "../utils/Files";
import throwError from "../helpers/throwError";

const uploadMiddleware = (req, res, next) => {
    if (parseInt(req.params.id) !== parseInt(req.headers.id_user)) {
        return throwError(403, "You don't have permission for change this user profile", next);
    }

    const initProcess = upload["image"];
    initProcess(req, res, next);
};

export default uploadMiddleware;
