const express = require("express");
const router = express.Router();
const {createPost,getAllPost,updatePost,removePost,getAllLikes,getDetail,getAllcomments}=require('./post.controller');
const{authenticateToken}=require('../../middlewares/jwt')

router.route('/createPost').post(authenticateToken,createPost);
router.route('/getAllPost/:id').get(authenticateToken,getAllPost);
router.route('/updatePost/:id').put(authenticateToken,updatePost);
router.route('/removePost/:id').delete(authenticateToken,removePost);
router.route('/getAllLikes').get(authenticateToken,getAllLikes);
router.route('/getDetail').get(authenticateToken,getDetail);
router.route('/getAllcomments').get(authenticateToken,getAllcomments);

module.exports=router;