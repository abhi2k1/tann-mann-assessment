const express = require("express");
const router = express.Router();

require("../db/conn");
const POST = require("../model/postSchema");

router.delete("/deletePost",async (req,res)=>{
    //console.log(req.body);
    const {postId} = req.body;
    const result = await POST.deleteOne({postId});
    if(result){
        return res.status(202).json({message:"Post deleted successfully"});
    }else{
        return res.status(402).json({message:"Due to some database issues..deletion failed"});
    }
});


module.exports = router;