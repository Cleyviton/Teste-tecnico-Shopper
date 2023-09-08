import { Request, Response } from "express";
import { TLoginData, TUser, TUserRequest } from "../interfaces/user.interfaces";
import services from "../services";

export const createUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const data: TUserRequest = req.body;
    const newUser = await services.user.create(data);

    return res.status(201).json(newUser);
};

export const loginUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const loginData: TLoginData = req.body;
    const token: string = await services.user.login(loginData);

    return res.json({ token });
};

export const retrieveUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId = res.locals.userId;

    const user = await services.user.retrieve(userId);

    return res.json(user);
};
