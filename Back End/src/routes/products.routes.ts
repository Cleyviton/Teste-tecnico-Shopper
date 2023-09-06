import { Router } from "express";

import controllers from "../controllers";
import middlewares from "../middlewares";

export const products: Router = Router();

products.get("", controllers.listProducts);

products.post(
    "/validate",
    middlewares.upload.single("uploadFile"),
    middlewares.ensureCsvIsValid,
    controllers.validateCsv
);

products.patch(
    "",
    middlewares.upload.single("uploadFile"),
    middlewares.ensureCsvIsValid,
    controllers.updateProducts
);
