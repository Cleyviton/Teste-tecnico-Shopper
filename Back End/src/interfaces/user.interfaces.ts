import { z } from "zod";
import {
    loginSchema,
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
} from "../schemas/user.schemas";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TLoginData = z.infer<typeof loginSchema>;
type TToken = {
    token: string;
};

export { TUser, TUserRequest, TUserResponse, TLoginData, TToken };
