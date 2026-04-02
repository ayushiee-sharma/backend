import express from "express"
const app = express()
import path from "path"
import { fileURLToPath } from "url"
import UserModel from "./models/user.js"

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")


app.get("/",(req,res)=>{
   res.render("index")
})
app.get("/read",async (req,res)=>{
   let allusers = await UserModel.find()
   res.render("read",{allusers})
})
app.get("/delete/:id",async (req,res)=>{
    await UserModel.findOneAndDelete({_id:req.params.id})
    res.redirect("/read")
})
app.post("/create",async (req,res)=>{
   let createduser=await UserModel.create({
      name:req.body.name,
      email:req.body.email,
      image:req.body.image,
   })
 res.redirect("/read")
})
app.get("/updation/:id",async (req,res)=>{
   let user=await UserModel.findOne({_id:req.params.id})
   res.render("updation",{user})
})
app.post("/update/:id",async (req,res)=>{
   let updateduser=await UserModel.findOneAndUpdate({_id:req.params.id},
      {name:req.body.name,
      email:req.body.email,
      image:req.body.image},
      {new:true})
      res.redirect("/read")

})



app.listen(3000)