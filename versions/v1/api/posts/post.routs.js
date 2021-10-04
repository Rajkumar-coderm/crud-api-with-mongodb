const express = require("express");
const router = express.Router();
const {createPost,getAllPost,updatePost,removePost}=require('./post.controller');
const{authenticateToken}=require('../../middlewares/jwt')

router.route('/createPost').post(authenticateToken,createPost);
router.route('/getAllPost/:id').get(authenticateToken,getAllPost);
router.route('/updatePost/:id').put(authenticateToken,updatePost);
router.route('/removePost/:id').delete(authenticateToken,removePost);

module.exports=router;