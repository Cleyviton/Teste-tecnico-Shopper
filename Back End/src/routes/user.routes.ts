import { Router } from "express";

import middlewares from "../middlewares";
import schemas from "../schemas";
import controllers from "../controllers";

export const user: Router = Router();

user.post(
    "",
    middlewares.ensureDataIsValid(schemas.userSchemaRequest),
    controllers.createUser
);
user.post(
    "/login",
    middlewares.ensureDataIsValid(schemas.loginSchema),
    controllers.loginUser
);
user.get("/retrieve", middlewares.ensureAuth, controllers.retrieveUser);
