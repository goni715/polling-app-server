import { TLoginUser } from "../../interfaces/user.interface";
import { Response } from 'express';
import validator from 'validator';
import UserModel from '../../models/UserModel';

const UserLoginService = async (res: Response, payload: TLoginUser) => {
   const { emailUsername, password } = payload;

   //if emaiUsername = email
   if(validator.isEmail(emailUsername)){
      //check if email does not exist 
      const userExists= await UserModel.findOne({email:emailUsername});
      if(!userExists){
         return res.status(404).json({
            success: false,
            message: `Couldn't find this email address`
         })
      }
   }else{
      //if emailUsername = username 
      //check if username does not exist 
      const userExists = await UserModel.findOne({username:emailUsername});
      if(!userExists){
         return res.status(404).json({
            success: false,
            message: `Wrong Username`
         })
      }  
   }
}

export default UserLoginService;
