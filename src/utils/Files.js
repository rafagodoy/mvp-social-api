import multer from "../config/multer";
import CryptoJS from "crypto-js";
import sharp from "sharp";
import throwError from "../helpers/throwError";

//TODO: A CLASSE AINDA PRECISARÁ ATINGIR AS SEGUINTES EVOLUÇÕES:
//ARMAZENAR ARQUIVOS NO S3
//SEPARAR O PROCESSO DE UPLOAD, CROP E RESIZE DE IMAGENS

class Files {
    constructor(type, req, res, next) {
        if (type === "image") this.loadImage(req, res, next);
    }

    async loadImage(req, res, next) {
        const loadImageInBuffer = multer.single("avatar");

        loadImageInBuffer(req, res, (err) => {
            if (err) {
                return throwError(500, err, next);
            }

            this.cropImage(req, next);
        });
    }

    async cropImage(req, next) {
        if (!req.file) return next();

        try {
            const croppedImage = await sharp(req.file.buffer)
                .extract({ left: 50, top: 120, width: 820, height: 920 }) // PEGAR OS VALORES NO REQUEST DO CLIENT
                .jpeg({ quality: 90 })
                .toFormat("jpeg")
                .toBuffer();

            this.resizeImage(req, croppedImage, req.file.originalname, next);
        } catch {
            return throwError(500, "An error ocurred during crop image. Please, try again.", next);
        }
    }

    async resizeImage(req, cropedImage, originalname, next) {
        if (!cropedImage) return next();

        try {
            const resizedImage = await sharp(cropedImage)
                .resize(420, 420, {
                    fit: "cover",
                })
                .toBuffer();

            this.uploadImage(req, resizedImage, originalname, next);
        } catch {
            return throwError(500, "An error ocurred during resize image. Please, try again.", next);
        }
    }

    async uploadImage(req, resizedImage, originalname, next) {
        if (!resizedImage) return next();

        const fileName = CryptoJS.HmacSHA1(originalname, process.env.CRYPTO_SECRET);

        try {
            await sharp(resizedImage)
                .resize(420, 420, {
                    fit: "cover",
                })
                .toFile(`./public/images/profiles/${fileName.toString()}.jpg`);

            req.headers.avatar_name = `${fileName.toString()}.jpg`;

            next();
        } catch {
            return throwError(500, "An error ocurred during save image. Please, try again.", next);
        }
    }
}

let upload = {};

upload["image"] = function UploadFactory(req, res, next) {
    return new Files("image", req, res, next);
};

export default upload;
