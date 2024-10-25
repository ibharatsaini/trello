import { Router } from "express"
import { createBoard, getBoard } from "../controllers/board.controller"
import authenticateUser from "../middlewares/authentication.middleware"

const router = Router()

router.route('/create').post(createBoard)
router.route('/:id').get(authenticateUser,getBoard)


export default router