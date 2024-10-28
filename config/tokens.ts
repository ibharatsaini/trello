import { CookieOptions, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
const JWT_EXPIRES = process.env.JWT_EXPIRES || "5d";
const environment = process.env.NODE_ENV


const generateJWTtoken = function (userId: string) {
  return jwt.sign({ _id: userId }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });
};

const sendToken = (user:any, res: Response) => {
  const token = generateJWTtoken(user._id);
  const options:CookieOptions = {
    httpOnly: true,
    maxAge  : 1000 * 60 * 6000,
    sameSite: environment == 'production' ? 'none':   'lax',
    secure: environment== 'production' ? true : false    
  };
  if(user.password) {
    user = user.toObject()
    delete user.password
 }
  


 res.cookie('token',token,options)
    // .json({
    //    success:true,
    //    data:user
    // })

};


export {
    sendToken,
    generateJWTtoken
}