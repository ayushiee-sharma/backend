import express, { request } from "express"
const app=express()

app.get("/profile/:username",function(req,res){
    res.send(`welcome ${req.params.username}`)
})
app.listen(4000)