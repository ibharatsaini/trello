import { Request,Response } from "express";
import Board from "../models/board.model";

// const board = Board

const createBoard = async (req:Request,res:Response)=>{
    try{
        let {title, members} = req.body
        
        if(!members || members.length == 0) members=null
        const board = await (await Board.create({title,members})).save()

        if(!board) throw new Error(`Board not created`)

        res.status(201).json({
            data: board
        })
        return

    }catch(e){
        res.status(400).json({
            message:`Board not created`
        })
    }
}

const getBoard = async (req:Request, res:Response) => {
    try{
        const {id} = req.params
        // console.log(id)
        const board = await Board.findById(id).populate("members","email firstName lastName")
        // console.log('dddd')
        // console.log(board)
        res.status(200).json({
            data: board
        })

        return
    }catch(e){
        res.status(400).json({
            message:`Couldn't get board.`
        })
    }
}

export {
    createBoard,
    getBoard
}