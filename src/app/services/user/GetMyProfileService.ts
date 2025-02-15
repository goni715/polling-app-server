import { Response } from "express";
import UserModel from "../../models/UserModel";

const GetMyProfileService = async (res:Response, loginUserId:string) => {

    try{
        const user = await UserModel.findById(loginUserId).select('-password');
    
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User Not Found'
            })
        }


        //Add the new attributes to the response
        const userInfo = {
            ...user.toObject(),
            totalPollsCreated:0,
            totalPollsVotes:0,
            totalPollsBookmarked:0
        }

        res.status(200).json({
            success: true,
            message: "Profile is retrieved successfully",
            data: userInfo
        })

    }catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message,
          });
    }
    
}

export default GetMyProfileService;