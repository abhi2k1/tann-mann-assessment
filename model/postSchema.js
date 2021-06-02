const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    postId:{
        type:Number,
    },
    postedBy:{
        type:"String"
    },
    postText:{
        type:"String"
    },
    updated:{
        type:Date,
        default:Date.now()
    }
});

const POST = mongoose.model("POST",postSchema);

module.exports = POST;