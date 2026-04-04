require("dotenv").config(   )
const app=require("./src/app.js")
const dbconnect=require("./db/db.js")

dbconnect()

app.listen(3000,()=>{
    console.log("server is running on port 3000 ")
})