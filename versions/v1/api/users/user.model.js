const mongoose = require("mongoose");

const userShema=mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        mobile:{
            type:String,
            require:true,
            maxlength:11
        },
        password: {
            type: String,
            required: true
        }
    }
)

module.exports=mongoose.model('user',userShema);