import mongoose from "mongoose";


const cardModel = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required."]
    },
    description:{
        type:String,
        // required:[true,"Title is required."]
    },
    // list:{
    //     type:mongoose.Schema.ObjectId,
    //     ref:"list"
    // },
    owner:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },
    dueDate:{
        type:String,
    }
})

const Card = mongoose.model("card",cardModel)


export default Card