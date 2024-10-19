import { Request, Response, Router } from "express"

const router = Router()

router.route("/status").get((req:Request,res:Response)=>{
    res.status(200).json({
        message:`Health check!`
    })
    return
})


export default router