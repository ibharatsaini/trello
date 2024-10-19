import mongoose from 'mongoose'

const DATABASE_URL = process.env.DATABASE_URL
const database = ()=>{
    if(!DATABASE_URL) throw new Error(`Database URL is required.`)

    mongoose.connect(DATABASE_URL,{
        // useUnifiedTopology:true,
        // useNewUrlParser:true
    })
    .then(data=>console.log(`Database started at:- ${data.connection.host}`))
    .catch(e=>console.log(e))
    return
}

export default database