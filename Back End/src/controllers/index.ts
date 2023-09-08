import { createUser, loginUser, retrieveUser } from "./user.controllers";
import {
    validateCsv,
    updateProducts,
    listProducts,
} from "./products.controllers";

const controllers = {
    createUser,
    loginUser,
    retrieveUser,
    validateCsv,
    updateProducts,
    listProducts,
};

export default controllers;
