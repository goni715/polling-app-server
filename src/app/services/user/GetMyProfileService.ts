import { Response } from "express";
import UserModel from "../../models/UserModel";

const GetMyProfileService = async (res:Response, loginUserId:string) => {

    try{
        const user = await UserModel.findById(loginUserId);
    
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User Not Found'
            })
        }
    
        res.status(200).json({
            success: true,
            message: "Profile is retrieved successfully",
            data: user
        })

    }catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message,
          });
    }
    
}

export default GetMyProfileService;