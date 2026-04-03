const mongoose=require("mongoose")
const dotenv = require('dotenv')
dotenv.config()

async function connectdb() {
  await  mongoose.connect(process.env.MONGO_URI)
  console.log("connected to db")
}
module.exports=connectdb