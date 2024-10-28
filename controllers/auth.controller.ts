import { Request, Response } from "express";
import User from "../models/user.model";
import { sendToken } from "../config/tokens";
import Board from "../models/board.model";
import { RequestUser } from "../middlewares/authentication.middleware";

const signUp = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, password, confirmPassword } = req.body;
    console.log(email)
    if (password !== confirmPassword)
      throw new Error(`Passwords do not match.`);
    const user = await (
      await User.create({ email, firstName, lastName, password })
    ).save();
    if (!user) throw new Error("User not created.");

    sendToken(user,res)

    res.status(200).json({
      data: user,
    });
    return;
  } catch (err) {
    res.status(401).json({
      message: `User Input invalid.`,
    });
    return;
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // console.log(email)
    // if (password !== confirmPassword)
    //   throw new Error(`Passwords do not match.`);
    const user = await User.findOne({ email }) ;
    if (!user) throw new Error("User not found.");
    const matched = await user.comparePassword(password)
    if(!matched){
      res.status(404).json({success: false,error:"Incorrect Password"}) 
      return
  }


    sendToken(user,res)
    const board = await Board.findOne({owner:user._id})
    
    res.status(200).json({
      data: {
        user,
        board: board
      },
    });
    return;
  } catch (err) {
    res.status(401).json({
      message: `User Input invalid.`,
    });
    return;
  }
};

const validateUser = async (req:RequestUser,res:Response) =>{
      try{
        res.status(200).json({
          data: req.user
        })
      }catch(e){
        res.status(401).json({
          message: `User not authenticated`
        })
      }
}



export { signUp, login, validateUser };
