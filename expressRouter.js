const express=require("express");
const router=express.Router();

router.get("/search",(req,res)=>{
    res.send("router/get")
})

module.exports=router;