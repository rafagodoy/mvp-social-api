import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/jpeg")) {
        cb(null, true);
    } else {
        cb("Please upload only images with .jpeg extension.", false);
    }
};

const upload = multer({ storage, fileFilter });

export default upload;
