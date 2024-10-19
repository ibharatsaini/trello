import mongoose from 'mongoose'

const DATABASE_URL = process.env.DATABASE_URL
const database = async ()=>{
    if(!DATABASE_URL) throw new Error(`Database URL is required.`)
         return mongoose.connect(DATABASE_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // serverSelectionTimeoutMS: 5000, // Adjust server selection timeout
            // socketTimeoutMS: 45000,         // Adjust socket timeout for long-running queries
            // keepAlive: true,                // Ensure the connection stays alive
            // keepAliveInitialDelay: 300000   // Start keeping alive after 5 minutes
          });

    // mongoose.connect(DATABASE_URL,{
    //     // useUnifiedTopology:true,
    //     // useNewUrlParser:true
    // })
    // .then(data=>console.log(`Database started at:- ${data.connection.host}`))
    // .catch(e=>console.log(e))
    // return
}

export default database