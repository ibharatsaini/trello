const app = require("./app")
// dotenv.config({path:"./.env"})


const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Express Server started on port: `,PORT)
})