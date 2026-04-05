const express=require("express")
const jwt=require("jsonwebtoken")
const usermodel=require("../models/user.model")
const router=express.Router()

// to check if the token is valid

router.post("/post",async (req,res)=>{
  const token=req.cookies.token;
  if(!token){
   return res.status(401).json
    ({
        message:"not registered"
    })
  }
  try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    const user=await usermodel.findOne({_id:decoded.id})
    console.log(user)
    }
 catch(err){
    return res.status(401).json({
        message:"token is invalid",
    })
 }
 res.status(201).json({
    message:"post created"
 })

})

module.exports=router