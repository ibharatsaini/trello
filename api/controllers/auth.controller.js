const userModel = require("../models/user.model")
const signUp = async (req,res) => {
    try{
        const {email,firstName, lastName,password}  = req.body
        console.log(email,firstName,lastName)
        const user = await userModel.create({email,firstName,lastName,password})
        if(!user) throw new Error("User not created.")
        return res.status(200).json({
    data: user})

    }catch(err){
        res.status(401).json({
            message:`User Input invalid.`
        })
    }
}

module.exports = {
    signUp
}