import { executeQuery } from "../../database/config";

import {
    IPack,
    IProduct,
    IProductCsv,
    IProductWithNewPrice,
} from "../../interfaces/products.interfaces";
import middlewares from "../../middlewares";

export const validateCsv = async (
    filePath: string
): Promise<IProductWithNewPrice[]> => {
    const data: IProductCsv[] | any = await middlewares
        .convertCsv(filePath)
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("Error at CSV convertion:", error);
        });

    const validatedData: IProductWithNewPrice[] = await Promise.all(
        data.map(
            async (product: IProductCsv): Promise<IProductWithNewPrice> => {
                let totalValue = 0;

                let validatedDataErrors: string[] = [];

                let newProduct: IProductWithNewPrice = {
                    actual_price: "",
                    name: "",
                    product_code: product.product_code,
                    validatedDataErrors: [],
                    new_price: Number(product.new_price),
                };

                if (!product.product_code) {
                    validatedDataErrors.push(
                        "O código do produto não foi informado"
                    );
                }

                if (!product.new_price) {
                    validatedDataErrors.push(
                        "O novo preço do produto não foi informado"
                    );
                }

                if (Number(product.new_price) <= 0) {
                    validatedDataErrors.push(
                        "Novo preço do produto é um valor inválido"
                    );
                }

                const queryString = `SELECT * FROM products WHERE code = ?`;
                const queryParams = [product.product_code];
                const productQueryResult: IProduct = await executeQuery(
                    queryString,
                    queryParams
                );

                if (
                    Array.isArray(productQueryResult) &&
                    productQueryResult.length > 0
                ) {
                    const firstProduct = productQueryResult[0];

                    newProduct = {
                        ...product,
                        new_price: Number(product.new_price),
                        actual_price: Number(firstProduct.sales_price),
                        name: firstProduct.name,
                        validatedDataErrors: [],
                    };

                    if (newProduct.new_price <= firstProduct.cost_price) {
                        validatedDataErrors.push(
                            "O preço de venda está abaixo do preço de custo"
                        );
                    }

                    const tenPercent = Number(firstProduct.sales_price) / 10;

                    if (
                        newProduct.new_price >
                        Number(firstProduct.sales_price) + tenPercent
                    ) {
                        const error =
                            "O novo preço de venda não pode sofrer um acréscimo maior do que 10% do preço antigo.";
                        const errorFound = validatedDataErrors.find(
                            (err) => err == error
                        );

                        if (!errorFound) {
                            validatedDataErrors.push(error);
                        }
                    }

                    if (
                        newProduct.new_price <
                        Number(firstProduct.sales_price) - tenPercent
                    ) {
                        validatedDataErrors.push(
                            "O novo preço de venda não pode sofrer um decréscimo maior do que 10% do preço antigo "
                        );
                    }
                }

                if (
                    Array.isArray(productQueryResult) &&
                    productQueryResult.length <= 0
                ) {
                    validatedDataErrors.push(
                        "Não foi possível encontrar um produto com esse código!"
                    );
                }

                const queryProductsInPacks: string =
                    "SELECT * FROM packs WHERE product_id = ?";
                const productProductsInPacksQueryResult: IPack[] =
                    await executeQuery(queryProductsInPacks, queryParams);

                if (
                    Array.isArray(productProductsInPacksQueryResult) &&
                    productProductsInPacksQueryResult.length > 0
                ) {
                    productProductsInPacksQueryResult.map((pack) => {
                        const packFound = data.some(
                            (productCSV: IProductCsv) => {
                                return productCSV.product_code == pack.pack_id;
                            }
                        );
                        if (!packFound) {
                            validatedDataErrors.push(
                                "O pack do produto não está incluso no arquivo"
                            );
                        }
                    });
                }

                const queryPacks: string =
                    "SELECT * FROM packs WHERE pack_id = ?";
                const productPacksQueryResult: IPack[] = await executeQuery(
                    queryPacks,
                    queryParams
                );

                if (
                    Array.isArray(productPacksQueryResult) &&
                    productPacksQueryResult.length > 0
                ) {
                    productPacksQueryResult.forEach((pack) => {
                        const productFound: IProductWithNewPrice = data.find(
                            (productCSV: IProductWithNewPrice) =>
                                productCSV.product_code == pack.product_id
                        );
                        if (
                            !productFound &&
                            Number(newProduct.product_code) < 1000
                        ) {
                            const error =
                                "Um ou mais produtos do pacote não estão inclusos no arquivo";
                            const errorFound = validatedDataErrors.find(
                                (err) => err == error
                            );
                            if (!errorFound) {
                                validatedDataErrors.push(error);
                            }
                        }

                        totalValue +=
                            Number(productFound?.new_price) * Number(pack.qty);
                    });

                    if (totalValue !== Number(product.new_price)) {
                        const error =
                            "O preço total dos produtos não é igual ao preço do pacote";
                        const errorFound = validatedDataErrors.find(
                            (err) => err == error
                        );

                        if (!errorFound) {
                            validatedDataErrors.push(error);
                        }
                    }
                }

                if (newProduct) {
                    newProduct.validatedDataErrors = validatedDataErrors;
                }

                return newProduct;
            }
        )
    );

    return validatedData;
};
