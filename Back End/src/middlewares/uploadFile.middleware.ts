import multer, { StorageEngine } from "multer";
import { Request } from "express";

const storage: StorageEngine = multer.diskStorage({
    destination: (req: Request, file, cb) => {
        cb(null, "./temp/");
        req.file = file;
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

export const upload = multer({ storage: storage });
