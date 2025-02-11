import { TLoginUser } from "../../interfaces/user.interface";
import { Response } from 'express';
import { isEmail } from 'validator';
import UserModel from '../../models/UserModel';
import checkPassword from '../../utils/checkPassword';

const UserLoginService = async (res: Response, payload: TLoginUser) => {
   const { emailUsername, password } = payload;

   let user;
   //if emaiUsername = email
   if(isEmail(emailUsername)){
      //check if email does not exist 
      user= await UserModel.findOne({email:emailUsername});
      if(!user){
         return res.status(404).json({
            success: false,
            message: `Couldn't find this email address`
         })
      }
   }else{
      //if emailUsername = username 
      //check if username does not exist 
      user = await UserModel.findOne({username:emailUsername});
      if(!user){
         return res.status(404).json({
            success: false,
            message: `Wrong Username`
         })
      }  
   }

   //check password
  const isPasswordMatch: boolean = await checkPassword(password,
    user?.password
  ); //return true or false
  if (!isPasswordMatch) {
    throw new Error("Wrong Password!");
  }
}

export default UserLoginService;
