import { Request, Response } from "express";
import List from "../models/list.model";
import { RequestUser } from "../middlewares/authentication.middleware";
import Board from "../models/board.model";

const getAllList = async (req: RequestUser, res: Response) => {
  try {
    const { boardId } = req.params;
    const list = await List.find({ owner: req.user?._id, board: boardId })

    res.status(200).json({
      data: list,
    });
    return;
  } catch (e) {
    res.status(404).json({
      message: `No List found`,
    });
  }
};

const getCardsByList = async (req: RequestUser, res: Response) => {
  try {
    const { listId } = req.params;
    const cards = await List.findById(listId)
      .select("cards")
      .populate("cards", "title description owner");
    // console.log(cards)
    res.status(200).json({
      data: cards,
    });
    return;
  } catch (e) {
    res.status(404).json({
      message: `No list found`,
    });
  }
};

const createList = async (req: RequestUser, res: Response) => {
  try {
    const { boardId } = req.params;
    const { title } = req.body;

    const boardOwner = await Board.findOne({
      owner: req.user?._id,
      _id: boardId,
    });
    const boardMemeber = await Board.findOne({
      members: req.user?._id,
      _id: boardId,
    });

    if (!boardOwner && !boardMemeber) {
      res.status(404).json({
        message: `Board not found.`,
      });
    }

    const list = await (
      await List.create({ title, owner: req.user?._id, board:boardId })
    ).save();

    res.status(200).json({
      data: list,
    });
  } catch (e) {
    res.status(404).json({
      message: `No list created.`,
    });
  }
};
export { getAllList, getCardsByList, createList };
