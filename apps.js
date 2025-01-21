
// var express=require("express")
// var mysql2=require("mysql2")
// var app=express()

// app.use(express.json())

// var conn=mysql2.createConnection({
//     host:"localhost",
//     port:3306,
//     user:"root",
//     password:"Suhash@123",
//     database:"details"
// })

// conn.connect((err)=>{
//     if(err){
//         console.log("error in connection")
//     }
//     else{
//         console.log("Successfully connected...!")
//     }
// })

// // app.post('/database',(req,res)=>{
// //     var {id,username,userpass,usermail}=req.body
// //     const query="insert into users (id,username,userpass,usermail) values (?,?,?,?)";
// //     conn.query(query,[id,username,userpass,usermail],(err,data)=>{
// //         if(err){
// //             console.log("error")
// //         }
// //         else{
// //             console.log(data)
// //             res.send(data)
// //         }
// //     })
// // }).listen(3007)
// app.post(3007,()=>{
//     console.log("running")
// })

// module.exports=conn


const express = require('express');
const userRoutes = require('./routes/userRoutes');

// require("dotenv").config()
// console.log('database host:',process.env.DB_HOST);
// console.log("API Key:", process.env.API_KEY);



const app = express();

app.use(express.json());

// User routes
app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
