const fs=require("fs");

const path=require("path");

fs.readFile("./fsRead.txt","utf-8",(error,data)=>{
      console.log(error);
      console.log(data)
});

let pathStr=__dirname;

let pathNew=path.join(__dirname,"/fsRead.txt");
// fs.writeFile(pathStr+"/fsRead","hello WORLD","utf-8",(err)=>{
//     console.log("dddd")
// })

// 获取文件名
let pathBaseName=path.basename(pathNew);

// 不要后缀名
let pathBaseNameShort=path.basename(pathNew,".txt");

let exPathName=path.extname(pathNew);

console.log(pathBaseName);

console.log(pathBaseNameShort);

console.log(exPathName);

fs.writeFile(pathNew,"hello WORLD","utf-8",(err)=>{
    console.log("dddd")
})