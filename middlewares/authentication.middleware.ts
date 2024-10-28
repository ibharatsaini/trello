import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user.model";
import { NextFunction, Request, Response } from "express";

const JWT_SECRET = process.env.JWT_SECRET || "SECRET";

// type User = {
//     email: string,
//     lastName: string,
//     firstName: string,
//     _id:string,
//     password ?: string
// }
export interface RequestUser extends Request {
  user?: IUser;
}

async function authenticateUser(
  req: RequestUser,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      res.status(404).json({ success: false, error: "Token not found" });
      return
    }
    const { _id } = jwt.verify(token, JWT_SECRET) as { _id: string };
    // const user = await crudOperations(User).getById(_id)
    const user = await User.findById({ _id });
    if (!user) {
      res.status(404).json({ success: false, error: "User not found" });
      return;
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(404).json({
      message: `Failed to authenticate.`,
    });
  }
}

export default authenticateUser;
