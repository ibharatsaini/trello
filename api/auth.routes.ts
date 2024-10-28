

import {Router} from 'express'
import { login, signUp, validateUser } from '../controllers/auth.controller'
import authenticateUser from '../middlewares/authentication.middleware'

const router = Router()

router.route("/sign-up").post(signUp)
router.route("/login").post(login)
router.route("/validate-user").get(authenticateUser,validateUser)


export default router