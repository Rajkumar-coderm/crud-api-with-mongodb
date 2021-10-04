const mongoose=require('mongoose')
var Schema = mongoose.Schema;

const postSchema=mongoose.Schema(
    {
        createBy:{
            type:Schema.Types.ObjectId,
            ref:"user"
        },
        message:{
            type:String,
            require:true
        },
        comments:{
            type:String,
            require:true
        },
        sendBy:{
            type:Schema.Types.ObjectId,
            ref:"user"
        },
        liked:{
            type:Schema.Types.ObjectId,
            ref:"user"
        }

    },
    {timestamps: true}
)

module.exports=mongoose.model('posts',postSchema)