import express from "express"
const app=express()
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

app.get("/",function(req,res){
    res.render("index");
})

app.listen(1000)