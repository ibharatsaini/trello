import { Router } from "express"
import { createBoard, getBoard } from "../controllers/board.controller"
import { createList, getAllList, getCardsByList } from "../controllers/list.controller"
import authenticateUser from "../middlewares/authentication.middleware"

const router = Router()

router.route('/create/:boardId').post(authenticateUser,createList)
router.route('/all/:boardId').get(authenticateUser, getAllList)
router.route('/cards/:listId').get( authenticateUser, getCardsByList)


export default router