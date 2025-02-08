import { NextFunction, Request, Response } from "express";
import verifyToken from "../utils/verifyToken";
import { Secret } from "jsonwebtoken";
import config from "../config";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You are not authorized",
      error: {
        message: 'Token must be provided'
      }
    });
  }

   //token-verify
   const decoded = verifyToken(
    token,
    config.jwt_access_secret as Secret
  );


  try {
  } catch (err) {}
};

export default AuthMiddleware;
