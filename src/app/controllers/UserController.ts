import { RequestHandler } from "express";

export const RegisterUser: RequestHandler = (req, res) => {
    try{
      
    }
    catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}