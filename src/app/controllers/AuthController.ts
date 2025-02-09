import { RequestHandler } from "express";
import UserCreateService from "../services/user/UserCreateService";
import UserLoginService from "../services/user/UserLoginService";


const registerUser: RequestHandler = async (req, res) => {
    try{

        const result = await UserCreateService(res, req.body);

        res.status(201).json({
            success: true,
            message: "User is registered successfully",
            data: result
        })
    }
    catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


const loginUser: RequestHandler = async (req, res) => {
    try{

        const result = await UserLoginService(res, req.body);

        res.status(200).json({
            success: true,
            message: "Log in success",
            data: result
        })
    }
    catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


export{
    registerUser,
    loginUser
}
