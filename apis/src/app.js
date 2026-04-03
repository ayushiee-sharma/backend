const express = require ("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let notes=[];
// frontend se data server p mngwane ko
app.post("/notes",(req,res)=>{
 notes.push(req.body)

 res.status(201).json({
    message:"note created"
 })
})
// server se data ko frontend p bhejne ko
app.get("/notes",(req,res)=>{

 res.status(200).json({
    message:"notes fetched successfully",
    notes:notes
 })
})
// server p already data ko delete krne ko
app.delete("/notes/:index",(req,res)=>{
    const index=req.params.index;
    delete notes[index]

    res.status(200).json({
        message:"note deleted"
    })

})
// server p data ko update krne ko
app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index;
    const description=req.body.description;
    notes[index].description=description;

    res.status(200).json({
        message:"note updated"
    })

})
module.exports=app