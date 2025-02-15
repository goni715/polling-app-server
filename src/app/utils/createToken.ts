import jwt, { Secret } from 'jsonwebtoken';


type TPayload = {
    id: string;
    email: string;
}

const createToken = (payload:any, secretKey:Secret, expiresIn:string) => {
    const token = jwt.sign(payload, secretKey, {
       algorithm: "HS256",
       expiresIn
     });
 
     return token;
 }
 

 export default createToken;