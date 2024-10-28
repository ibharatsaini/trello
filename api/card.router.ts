import { Router } from "express"
import { createCard, getAllCards, getCardById, updateFields } from "../controllers/card.controller"
import authenticateUser from "../middlewares/authentication.middleware"

const router = Router()

// router.route('/create').post(createBoard)
router.route('/all').get(authenticateUser, getAllCards)
router.route('/create/:listId').post(authenticateUser, createCard)
router.route('/update/:cardId').post(authenticateUser, updateFields)
router.route('/:id').get(authenticateUser, getCardById)

export default router