const app=require("./src/app.js")
const connectdb=require("./src/db/db.js")

connectdb()


app.listen(3000,()=>{
    console.log("server is running on 3000")
})
 

