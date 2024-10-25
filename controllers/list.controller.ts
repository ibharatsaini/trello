import { Request, Response } from "express";
import List from "../models/list.model";


const getAllList = async (req:Request, res:Response) =>{
    try{
        const lists = await List.find().populate("cards","title description").populate("owner","email firstName lastName")
        
        res.status(200).json({
            data: lists
        })
        return

    }catch(e){
        res.status(404).json({
            message:`No List found`
        })
    }
}


const getCardsByList = async (req:Request, res:Response) => {
    try{
        const {listId} =   req.params
        const cards = await List.findById(listId).select("cards").populate("cards","title description owner")
        // console.log(cards)
        res.status(200).json({
            data:cards
        })
        return

    }catch(e){
        res.status(404).json({
            message: `No list found`
        })
    }
}


export {
    getAllList,
    getCardsByList
}