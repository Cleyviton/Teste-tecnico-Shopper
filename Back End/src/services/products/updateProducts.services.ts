import { executeQuery } from "../../database/config";
import { IProduct, IProductCsv } from "../../interfaces/products.interfaces";
import middlewares from "../../middlewares";

export const update = async (filePath: string): Promise<IProduct[]> => {
    const results: any = await middlewares
        .convertCsv(filePath)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("Error at CSV convertion:", error);
        });

    let products: Promise<IProduct[]> = Promise.all(
        results.map(async (product: IProductCsv) => {
            const query = `
                    UPDATE
                        products
                        
                    SET 
                        sales_price = ?
                    WHERE
                        code = ?`;
            const params = [product.new_price, product.product_code];
            await executeQuery(query, params);

            const queryReturn = `
                    SELECT
                        *
                    FROM
                        products
                    WHERE
                        code = ?`;
            const paramsResult = [product.product_code];
            const productQueryResult = await executeQuery(
                queryReturn,
                paramsResult
            );

            return productQueryResult[0];
        })
    );

    return products;
};
