

import {Router} from 'express'
import { login, signUp } from '../controllers/auth.controller'

const router = Router()

router.route("/sign-up").post(signUp)
router.route("/login").post(login)


export default router