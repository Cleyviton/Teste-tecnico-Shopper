import { update } from "./updateProducts.services";
import { validateCsv } from "./validateCsvProducts.services";
import { list } from "./listProducts.services";

export const products = {
    update,
    validateCsv,
    list,
};
