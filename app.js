const express=require("express");

const app=express();

const router=require("./expressRouter");

app.use("/user",router);

app.listen(80,()=>{
    console.log("router启动了");
})