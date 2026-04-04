const express=require("express")
const router=express.Router();
const controller=require("../controllers/auth.controller.js")

router.post("/register",controller.Registeruser)

module.exports=router