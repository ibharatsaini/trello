import { Router } from "express"
import { createBoard, getBoard, getBoardById, getAllBoard } from "../controllers/board.controller"
import authenticateUser from "../middlewares/authentication.middleware"

const router = Router()

router.route('/create').post(authenticateUser, createBoard)
router.route('/all').get(authenticateUser,getAllBoard)
router.route('/get-board').get(authenticateUser,getBoard)
router.route('/:id').get(authenticateUser,getBoardById)


export default router