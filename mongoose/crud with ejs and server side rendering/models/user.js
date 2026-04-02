import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/userdatabase")

const UserSchema=mongoose.Schema({
    image:String,
    email:String,
    name:String,
})

export default mongoose.model("user",UserSchema)


