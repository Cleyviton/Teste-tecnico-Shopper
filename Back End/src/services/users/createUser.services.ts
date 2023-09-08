import format from "pg-format";

import { executeQuery } from "../../database/config";
import { AppError } from "../../error";
import { TUserRequest } from "../../interfaces/user.interfaces";
import schemas from "../../schemas";
import { hashSync } from "bcryptjs";

export const create = async (data: TUserRequest) => {
    let queryString = `
    SELECT
        *
    FROM
        users
    WHERE
        email = ?`;

    let queryParams = [data.email];

    let queryResult = await executeQuery(queryString, queryParams);

    if (queryResult.length > 0) {
        throw new AppError("Email already registered!", 409);
    }

    data.password = hashSync(data.password, 10);

    queryString = format(
        `
    INSERT INTO 
    users 
        (%I) 
    VALUES 
        (%L);
    `,
        Object.keys(data),
        Object.values(data)
    );

    queryResult = await executeQuery(queryString);

    queryString = `
    SELECT
        *
    FROM
        users
    WHERE
        email = ?`;

    queryParams = [data.email];

    queryResult = await executeQuery(queryString, queryParams);

    return schemas.userSchemaResponse.parse(queryResult[0]);
};
