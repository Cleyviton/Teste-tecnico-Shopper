import { executeQuery } from "../../database/config";
import schemas from "../../schemas";

export const retrieve = async (userId: string) => {
    const queryString = `
    SELECT
        *
    FROM
        users
    WHERE
        id = ?;`;

    const queryParams = [userId];

    const queryResult = await executeQuery(queryString, queryParams);

    return schemas.userSchemaResponse.parse(queryResult[0]);
};
