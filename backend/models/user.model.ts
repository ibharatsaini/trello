import mongoose  from "mongoose"

const userModel = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Password is required."]
    },
    lastName:{
        type:String,
        required:[true, "Last name is required."]
    },
    email:{
        type:String,
        required:[true, "Email is required."]
    },
    password:{
        type:String,
        required:[true,"Password is required."]
    },
    tokens:{
        access_token:{
            type:String,
        },
        refresh_token:{
            type:String,
        }
    }
})


const User = mongoose.model("user", userModel)

export default User