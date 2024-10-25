import { Request, Response } from "express";
import Card from "../models/card.model";

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



const updateFields = async (req:Request,res:Response) => {
    try{
        const {title,description,dueDate} = req.body
        const {cardId} = req.params

        const card = await Card.updateOne({_id:cardId},{title,description,dueDate})

    res.status(200).json({
      data: card,
    });
    return;

    }catch(e){
        res.status(404).json({
            message:`No field updated`
        })
    }
}


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

export { getAllCards, getCardById, updateFields };
