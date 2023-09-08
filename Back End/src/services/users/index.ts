import { create } from "./createUser.services";
import { retrieve } from "./retrieveUser.services";
import { login } from "./loginUser.service";

export const user = { create, login, retrieve };
