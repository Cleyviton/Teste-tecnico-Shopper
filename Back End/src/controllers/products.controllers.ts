import { Request, Response } from "express";

import {
    IProduct,
    IProductResponse,
    IProductWithNewPrice,
} from "../interfaces/products.interfaces";
import services from "../services";

export const validateCsv = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const filePath: string = req.file!.path;
    const products: IProductWithNewPrice[] | void =
        await services.products.validateCsv(filePath);

    const hasErrors: boolean = products.some(
        (product) => product.validatedDataErrors?.length > 0
    );

    if (hasErrors) return res.status(409).json(products);

    return res.json(products);
};

export const updateProducts = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const filePath: string = req.file!.path;
    const updatedProducts: IProduct[] = await services.products.update(
        filePath
    );

    return res.json(updatedProducts);
};

export const listProducts = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const products: IProductResponse[] = await services.products.list();

    return res.json(products);
};
