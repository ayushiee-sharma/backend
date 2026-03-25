import express from "express"

const app=express()
// middleware

// to be able to read json data 
app.use(express.json()) 
// to be able to read url data
app.use(express.urlencoded({extended:true}))

app.use(function(req,res,next){
  console.log("middleware chla")
  next()
})
app.use(function(req,res,next){
  console.log("ek or middleware chla")
  next()
})


app.get("/",function(req,res){
   res.send("heloooooo hiiiiii")
})

app.get("/about",function(req,res){
   res.send("heloooooo jiiiii")
})
app.listen(4000)