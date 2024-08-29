const express = require('express');



const app = express();

app.get('/api/get',(req,res) =>{
        res.send({message:'Nodejs Aws Deployment'})
})
app.get('/api/get/user',(req,res) =>{
        res.send({name:'shivank',email:'gargshivank211@gmail.com'})
})



app.listen(9000,(req,res)=>{
        console.log("server running on 9000")
})