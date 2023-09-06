import { executeQuery } from "../../database/config";
import { IProductResponse } from "../../interfaces/products.interfaces";

export const list = async (): Promise<IProductResponse[]> => {
    const queryString = `
        SELECT
            *
        FROM
            products`;

    const queryResult: IProductResponse[] = await executeQuery(queryString);

    return queryResult;
};
