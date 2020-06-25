import { ErrorHandler } from "./error";

const throwError = (code, error, next) => {
    try {
        throw new ErrorHandler(code, error);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

export default throwError;
