const express = require("express");
const router = express.Router();

require("../db/conn");
const POST = require("../model/postSchema");

router.put("/updatePost",async (req,res)=>{
    //console.log(req.body);
    const {postId,postText} = req.body;

    const result = await POST.updateOne({postId},{$set:{postText}});

    if (result){
        return res.status(202).json({message:"Post Updated SuccessFully"});
    }
    else{
        return res.status(402).json({message:"Fail ! Due to some issues"});
    }
});

module.exports = router;