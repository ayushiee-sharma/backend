const express = require("express")
const app=express()
const noteModel=require("../models/note.model.js")
app.use(express.json())

module.exports=app

app.post("/notes",async (req,res)=>{
    const data=req.body;
    await noteModel.create({
        title:data.title,
        description:data.description,
    })
    res.status(201).json({
        message:"note created"
    })

})

app.get("/notes",async (req,res)=>{
    const notes= await noteModel.find()
    
    res.status(201).json({
        message:"notes fetched",
        notes:notes,
    })

})

app.delete("/notes/:id",async (req,res)=>{
    const id=req.params.id
      await noteModel.findOneAndDelete({_id:id})
    
    res.status(201).json({
        message:"note deleted",
        
    })

})


app.patch("/notes/:id",async (req,res)=>{
    const id=req.params.id
    const description=req.body.description
      await noteModel.findOneAndUpdate({_id:id},{description:description})
    
    res.status(201).json({
        message:"note updated",
        
    })

})