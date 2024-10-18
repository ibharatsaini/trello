const path = require("path")
require("dotenv").config({path:path.join(__dirname,"..",".env")})

// dotenv.config({path:"./env"})

const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const statusRouter = require("./router/status.router")
const authRouter = require("./router/auth.routes")
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())


app.use(express.static(path.resolve(__dirname, "..","frontend","build")))




app.use("/api",statusRouter)
app.use("/api/auth",authRouter)



if(process.env.NODE_ENV=='production'){
    console.log('production running')
    console.log(__dirname)
    app.get('*', (req, res) => {
         res.sendFile(path.resolve(__dirname, "..",'frontend', 'build', 'index.html'))
    });
}

module.exports = app