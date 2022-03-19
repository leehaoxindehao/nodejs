const http=require("http");

const server=http.createServer();

server.on("request",(req,res)=>{
    // 端口后的路径
    console.log(req.url); 
    console.log(req.method);
    // console.log(res)
    // 防止中文显示乱码
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.end("中文的内容情况")
})

server.listen("80",()=>{
  console.log("server is on");
})