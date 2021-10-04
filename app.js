const morgan = require("morgan");
const express=require('express');
const app=express()
require('dotenv').config()
app.use(express.json());
app.use(morgan('dev'));

app.get("/",(req,res)=>{
    res.send("hello word")
})

const router = require("./versions/v1/routes/index");
app.use('/api/v1',router)

app.use("*",(req,res)=>{
    res.status(404).json({
        status:404,
        message:"Router is not found"

    });
});

module.exports=app;

