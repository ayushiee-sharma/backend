const usermodel=require("../models/user.model.js")
const jwt=require("jsonwebtoken")


async function Registeruser(req,res){
    const existinguser= await usermodel.findOne({
        email:req.body.email
    })
    if (existinguser){
        return res.status(409).json(
        {
          message:("user already exists")
        }) 
    }

    const user=await usermodel.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    const token=jwt.sign({
        id:user._id
    },  process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"user registered",
        user:user,
    })
}



module.exports={Registeruser}

