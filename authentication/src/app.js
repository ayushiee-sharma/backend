const express=require("express")
const app=express()
const authroutes=require("../routes/auth.routes.js")
const postroutes=require("../routes/post.routes.js")

const cookieParser=require("cookie-parser")

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authroutes)
app.use("/api/posts",postroutes)


module.exports=app
