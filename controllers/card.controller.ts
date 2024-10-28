import { Request, Response } from "express";
import Card from "../models/card.model";
import { RequestUser } from "../middlewares/authentication.middleware";
import mongoose from "mongoose";
import List from "../models/list.model";

const getAllCards = async (req: Request, res: Response) => {
  try {
    const card = await Card.find()
      .populate("list", "title")
      .populate("owner", "email firstName lastName");

    res.status(200).json({
      data: card,
    });
    return;
  } catch (e) {
    res.status(404).json({
      message: `No Card found`,
    });
  }
};

const getCardById = async (req: Request, res: Response) => {
  try {
    const card = await Card.findById(req.params.id)
      .populate("list", "title")
      .populate("owner", "email firstName lastName");

    res.status(200).json({
      data: card,
    });
    return;
  } catch (e) {
    res.status(404).json({
      message: `No Card found`,
    });
  }
};

const updateFields = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate } = req.body;
    const { cardId } = req.params;

    const card = await Card.updateOne(
      { _id: cardId },
      { title, description, dueDate }
    );

    res.status(200).json({
      data: card,
    });
    return;
  } catch (e) {
    res.status(404).json({
      message: `No field updated`,
    });
  }
};
const createCard = async (req: RequestUser, res: Response) => {
  try {
    const { title } = req.body;
    const { listId } = req.params;
    const card = await (
      await Card.create({
        list: new mongoose.Types.ObjectId(listId),
        title,
        owner: req.user?._id,
      })
    ).save();
    const list = await List.findByIdAndUpdate(listId, {
      $push: { cards: card._id },
    });
    if (!list || !card) throw new Error(`Card not created.`);
    res.status(200).json({
      data: card,
    });
    return;
  } catch (e) {
    res.status(404).json({
      message: `Card not created`,
    });
  }
};

// const getCardByList = async (req:Request, res:Response) =>{
//     try{
//         const card = await Card.find({list:req.params.id}).populate("list","title").populate("owner","email firstName lastName")

//         res.status(200).json({
//             data: card
//         })
//         return

//     }catch(e){
//         res.status(404).json({
//             message:`No Card found`
//         })
//     }
// }

export { getAllCards, getCardById, updateFields, createCard };
