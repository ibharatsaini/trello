const { signUp } = require("../controllers/auth.controller")

const router = require("express").Router()


router.route("/sign-up").post(signUp)


module.exports = router