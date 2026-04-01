import express from "express"
const app = express()
import path from "path"
import { fileURLToPath } from "url"

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("viewengine","ejs")


app.get("/",(req,res)=>{
   res.send("working")
})

app.listen(3000)