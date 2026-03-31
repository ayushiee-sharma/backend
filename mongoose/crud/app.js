const express = require('express')
 const app = express()
const userModel = require('./usermodel')

 app.get("/",function(req,res){
    res.send("heloooo")
 })

  app.get("/create",async (req,res)=>{
    let createduser= await userModel.create(
      {
          name:"ayushi",
          email:"ayu@gmail.com",
          username:"ayushish"
    })
    res.redirect("/read")
 })


//  find gives objects inside an array 
 app.get("/read",async (req,res) => {
   let users=await userModel.find()
   res.send(users)
 })


//  findOne gives only object

 app.get("/readone",async (req,res) => {
   let users=await userModel.findOne({name:"ayushi"})
   res.send(users)
 })


 app.get("/update",async(req,res)=>{
   let updateduser= await userModel.findOneAndUpdate({name:"ayushi"},{name:"ayushi sharma"},{new:true})
   res.send(updateduser)
 })

 app.get("/delete",async(req,res)=>{
   let deleted= await userModel.findOneAndDelete({name:"ayushi"})
   res.send(deleted)
 })
 app.listen(3000)