const router = require("express").Router()


router.route("/status").get((req,res)=>{
    return  res.status(200).json({
        message:`Health check!`
    })
})


module.exports = router