import express from "express"
const app=express()

app.get("/profile/ayushi",function(req,res){
    res.send("heyyyy ayushi")
})
app.listen(4000)