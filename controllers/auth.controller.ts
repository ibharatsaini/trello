import { Request, Response } from 'express'
import User from '../models/user.model'


const signUp = async (req:Request,res:Response) => {
    try{
        const {email,firstName, lastName,password}  = req.body
        console.log(email,firstName,lastName)
        const user = await (await User.create({email,firstName,lastName,password})).save()
        // // await user.save()
        // console.log(user)
        // if(!user) throw new Error("User not created.")
        res.status(200).json({
    data: {
        email,
        firstName,
        lastName,
        password
    }})
        return
    }catch(err){
        res.status(401).json({
            message:`User Input invalid.`
        })
        return
    }
}

export {
    signUp
}