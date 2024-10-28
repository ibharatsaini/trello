import { Request, Response } from "express";
import Board from "../models/board.model";
import { RequestUser } from "../middlewares/authentication.middleware";
import User, { IUser } from "../models/user.model";
import { resourceLimits } from "worker_threads";
import { Mongoose, ObjectId } from "mongoose";

// const board = Board

const createBoard = async (req: RequestUser, res: Response) => {
  try {
    let { title, members } = req.body;

    if (!members || members.length == 0) members = null;

    const users = await User.find({ email: { $in: members } });

    const memebersWithId = users.reduce((acc: ObjectId[], user: IUser) => {
      if (user) acc.push(user._id as ObjectId);
      return acc;
    }, []);


    const board = await (
      await Board.create({
        title,
        members: memebersWithId,
        owner: req.user?._id,
      })
    ).save();

    if (!board) throw new Error(`Board not created`);

    res.status(201).json({
      data: board,
    });
    return;
  } catch (e) {
    res.status(400).json({
      message: `Board not created`,
    });
  }
};

const getBoardById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // console.log(id)
    const board = await Board.findById(id).populate(
      "members",
      "email firstName lastName"
    );
    // console.log('dddd')
    // console.log(board)
    res.status(200).json({
      data: board,
    });

    return;
  } catch (e) {
    res.status(400).json({
      message: `Couldn't get board.`,
    });
  }
};


const getBoard = async (req:RequestUser,res:Response) => {
    try{
        const board = await Board.findOne({owner:req.user?._id}).select("_id")
        res.status(200).json({
            data:board
        })
    }catch(e){
        res.status(404).json({
            message:`No board found.`
        })
    }
}

const getAllBoard = async (req:RequestUser, res:Response) => {
  try{
        // console.log(req.user?._id)
        const board = await Board.find({owner:req.user?._id})
        // console.log(board)
        res.status(200).json({
          data:board
        })
        return
  }catch(e){
    res.status(404).json({
      message:`No board found.`
    })
  }
}


export { createBoard, getBoardById, getBoard, getAllBoard };
