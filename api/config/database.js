const { default: mongoose } = require("mongoose")

const DATABASE_URL = process.env.DATABASE_URL

const database = ()=>{
    mongoose.connect(DATABASE_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(data=>console.log(`Database started at:- ${data.connection.host}`))
    .catch(e=>console.log(e))
}

module.exports = database