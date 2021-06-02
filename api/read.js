const express = require("express");
const router = express.Router();

require("../db/conn");
const POST = require("../model/postSchema");

router.get("/readPost",async (req,res)=>{
    const result = await POST.find();
    return res.send(result);
});

module.exports = router;