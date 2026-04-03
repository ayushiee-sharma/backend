const mongoose=require("mongoose")

async function connectdb() {
  await  mongoose.connect("mongodb+srv://ayushiji:ayushi@cluster0.w4bq1hw.mongodb.net/testdb")
  console.log("connected to db")
}
module.exports=connectdb