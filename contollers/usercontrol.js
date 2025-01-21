
var users=require("../models/user.js")

const getAll=async (req,res)=>{
    try{
        var data=await users.findAll()
        res.json(data)
    }
    catch(err){
        res.send(err)
    }
};

const createuser=async (req,res)=>{
    try{
        const newUser= await users.create(req.body);
        res.json(newUser)
    }
    catch(error){
        res.json(error)
    }
}

const updateuser=async (req,res)=>{
    try{
        const updateuser=await users.update(req.params.id,req.body);
        res.json(updateuser)
    }
    catch(error){
        res.json(error)
    }
}

const deleteuser=async (req,res)=>{
    try{
        const deleteuser=await users.delete(req.params.id);
        res.json(deleteuser)
    }
    catch(error){
        res.json(error)
    }
}

module.exports= {
    getAll,
    createuser,
    updateuser,
    deleteuser
}