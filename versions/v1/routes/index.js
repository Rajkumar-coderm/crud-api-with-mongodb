
const router=require("express").Router()
const user = require("../api/users/user.routs");
const post=require("../api/posts/post.routs")

router.use("/user",user)
router.use("/post",post)

module.exports=router;