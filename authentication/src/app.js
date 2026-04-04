const express=require("express")
const app=express()
const routes=require("../routes/auth.routes.js")
const cookieParser=require("cookie-parser")

// middlewares
app.use(express.json())
app.use("/api/auth",routes)
app.use(cookieParser())

module.exports=app
