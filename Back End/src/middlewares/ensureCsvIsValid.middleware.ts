import { NextFunction, Request, Response } from "express";

export const ensureCsvIsValid = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.file) {
        return res.status(400).json({
            message: "Upload a file",
        });
    }

    if (req.file.mimetype != "text/csv") {
        return res.status(400).json({
            message:
                "The file type is not supported, try uploading a .csv file",
        });
    }

    next();
};
