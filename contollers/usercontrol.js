
var users=require("../models/user.js")

exports.usersdata=async (req,res)=>{
    try{
        var data=await users.usersdata()
        if(data){
            res.send("you are not accessed")
        }
        else{
            res.send("no data")
        }
    }
    catch(err){
        res.send(err)
    }
};