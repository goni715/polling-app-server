import { TLoginUser } from "../../interfaces/user.interface";
import { Response } from 'express';
import { isEmail } from 'validator';
import UserModel from '../../models/UserModel';
import checkPassword from '../../utils/checkPassword';
import createToken, { TExpiresIn } from "../../utils/createToken";
import config from "../../config";


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
    return res.status(400).json({
       success: false,
       message: "Wrong Password"
    })
  }

 //token-payload
  const tokenPayload = {
    id: user.id,
    email: user.email
  };

   const accessToken = createToken(
    tokenPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as TExpiresIn
  );

  return {
    accessToken
  };
   
}

export default UserLoginService;
