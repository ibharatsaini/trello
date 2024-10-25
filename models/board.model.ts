import mongoose from 'mongoose'



const boardModel = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title is required."]
    },
    lists:[{
        type:mongoose.Schema.ObjectId,
        ref: "list"        
    }],
    owner:{
        type: mongoose.Schema.ObjectId,
        ref:"user"
    },
    members:[{
        type: mongoose.Schema.ObjectId,
        ref:"user"
    }],
    description:{
        type:String
    }
})


const Board  = mongoose.model("board",boardModel)

export default Board