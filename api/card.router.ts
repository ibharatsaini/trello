import { Router } from "express"
import { getAllCards, getCardById, updateFields } from "../controllers/card.controller"
import authenticateUser from "../middlewares/authentication.middleware"

const router = Router()

// router.route('/create').post(createBoard)
router.route('/all').get(authenticateUser, getAllCards)
router.route('/:id').get(authenticateUser, getCardById)
router.route('/update/:cardId').post(authenticateUser, updateFields)


export default router