const fs=require("fs")
fs.writeFile("hey.text","hey how are you?",function(err){

    if (err){
        console.log(err)
    }
    else console.log("done")
})

const fs2=require("fs")
fs2.appendFile("hey.text","i am fine",function(err){

    if (err){
        console.log(err)
    }
    else console.log("done")
})