const fs=require("fs");
const path = require("path");
// console.log(__dirname);
// console.log(path.extname());

const express=require("express");
let  app=express();

app.get("/user",(req,res)=>{
    // 查询参数
    console.log(req.query);
    // 返回的数据和数据结构
    res.send({
        name:"lihaoxin",
        age:20
    })
})

app.post("/user",(req,res)=>{
    // 查询参数
    console.log(req.query);
    // 返回的数据和数据结构
    res.send({
        name:"lihaoxin",
        age:18
    })
})

// 访问静态资源，指定资源的文件夹
app.use("/public",express.static("public"));

// 可以有多个动态参数
app.get("/user:id/:name",(req,res)=>{
    // 动态匹配URL参数
    console.log(req.params);
 
})
// 启动的服务器
app.listen(8080, ()=>{
  console.log("打印相应的结果")
})