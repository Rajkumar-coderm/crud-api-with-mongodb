const mongoose=require('mongoose')
var Schema = mongoose.Schema;

const likeSchema=mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'posts'
    },
    postId:{
        type:Schema.Types.ObjectId,
        ref:'posts'
    }
})

module.exports=mongoose.model('likes',likeSchema)
