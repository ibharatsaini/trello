import { Router } from "express"
import { createBoard, getBoard } from "../controllers/board.controller"
import { getAllList, getCardsByList } from "../controllers/list.controller"

const router = Router()

// router.route('/all').post(createBoard)
router.route('/all').get(getAllList)
router.route('/cards/:listId').get(getCardsByList)


export default router