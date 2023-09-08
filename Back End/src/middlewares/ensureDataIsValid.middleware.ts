import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { TUserRequest } from "../interfaces/user.interfaces";

export const ensureDataIsValid =
    (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {
        const validatedData: TUserRequest = schema.parse(req.body);

        req.body = validatedData;

        next();
    };
