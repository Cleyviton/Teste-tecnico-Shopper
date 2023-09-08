import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";

import { executeQuery } from "../../database/config";
import { AppError } from "../../error";
import { TLoginData } from "../../interfaces/user.interfaces";

export const login = async (data: TLoginData) => {
    const queryString = `
    SELECT
        *
    FROM
        users
    WHERE
        email = ?`;

    const queryParams = [data.email];

    const queryResult = await executeQuery(queryString, queryParams);

    if (queryResult.length == 0) {
        throw new AppError("Invalid credentials", 401);
    }

    const findUser = queryResult[0];

    const verifyPassword = compareSync(data.password, findUser.password);

    if (!verifyPassword) {
        throw new AppError("Invalid credentials", 401);
    }

    const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
        expiresIn: "1d",
        subject: String(findUser.id),
    });

    return token;
};
