const express = require("express");
const router = express.Router();

require("../db/conn");
const POST = require("../model/postSchema");


router.post("/createPosts",async (req,res)=>{
    //console.log(req.body);
    const {postId,postedBy,postText} = req.body;
    if(!postId || !postedBy || !postText){
        return res.status(404).json({message : "Incomplete details"});
    }

    const post = new POST({postId,postedBy,postText});

    await post.save();

    return res.status(202).json({message:"New Post Create Successfully"});

});

module.exports = router;