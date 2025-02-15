import { Request, RequestHandler, Response } from "express";
import UserCreateService from "../services/user/UserCreateService";
import UserLoginService from "../services/user/UserLoginService";
import GetMyProfileService from "../services/user/GetMyProfileService";


const registerUser = async (req: Request, res: Response) => {
  await UserCreateService(res, req.body);
};


const loginUser: RequestHandler = async (req, res) => {
    await UserLoginService(res, req.body);
}

const getMyProfile = async (req:Request, res:Response) => {
  const loginUserId = req.headers.id;
  await GetMyProfileService(res, loginUserId as string);
}



export{
    registerUser,
    loginUser,
    getMyProfile
}
