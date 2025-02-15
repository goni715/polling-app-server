import { Request, RequestHandler, Response } from "express";
import UserCreateService from "../services/user/UserCreateService";
import UserLoginService from "../services/user/UserLoginService";


const registerUser = async (req: Request, res: Response) => {
  await UserCreateService(res, req.body);
};


const loginUser: RequestHandler = async (req, res) => {
    const result = await UserLoginService(res, req.body);
}


export{
    registerUser,
    loginUser
}
