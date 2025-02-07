import { NextFunction, Request, Response } from "express";


const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
      return res.status(401).json({
          success: false,
          message: "You are not authorized",
          error: {
              message: "token must be provided"
          }
      })
    }

    
    try{
   

    }
    catch(err){

    }
}



export default AuthMiddleware;
