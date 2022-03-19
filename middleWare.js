const express=require("express");
const { nextTick } = require("process");

const app=express();

const mw=(req,res,next)=>{
   console.log("中间件打印信息");

   next()
}

const mw2=(req,res,next)=>{
    console.log("中间件打印信息2");
 
    next()
 }

// 全局中间件的两种使用方式
// app.use(mw);

// app.use((req,res,next)=>{
//   console.log("第二个中间件");
//   next()
// })

// 局部中间件
app.get("/",mw,mw2,(req,res)=>{
    res.send("中间件返回信息局部")
})

// 局部中间件的等效用法
// app.get("/",[mw,mw2],(req,res)=>{
//     res.send("中间件返回信息局部")
// })

app.get("/list",(req,res)=>{
    res.send("中间件返回信息list")
})

app.listen(80,()=>{
    console.log("服务器启动")
})