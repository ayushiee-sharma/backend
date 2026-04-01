import express from "express"
const app=express()
import * as fs from 'node:fs/promises';
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// setting up public static files
app.use(express.static(path.join(__dirname,"public")));

// settting up ejs as a viewengine
app.set('view engine','ejs')

app.get("/",async function(req,res){
    try{
            let data= await fs.readFile("tasks.json","utf-8")
            data=JSON.parse(data)
            res.render("index",{files : data});
    }
    catch(err){
        
    }

})
app.post("/submit",async (req,res)=>{
    try{
        let data = await fs.readFile("tasks.json",'utf-8')
        data=JSON.parse(data)
        data.push(req.body)
        data=JSON.stringify(data)
        await fs.writeFile("tasks.json",data)
        res.redirect('/')
        res.render('index',)
    }
    catch(err){
        console.log(err)
    }

})

app.listen(3000)