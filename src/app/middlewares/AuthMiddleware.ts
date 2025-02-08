import { NextFunction, Request, Response } from "express";

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
<<<<<<< HEAD
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }
=======
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
>>>>>>> c32bd50ebe0382f468239a0b22a42f23284e455f

  try {
  } catch (err) {}
};

<<<<<<< HEAD
=======
    }
    catch(err){

    }
}



>>>>>>> c32bd50ebe0382f468239a0b22a42f23284e455f
export default AuthMiddleware;
