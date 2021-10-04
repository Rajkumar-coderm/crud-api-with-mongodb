var express = require("express");
var router = express.Router();

const{getUser,createUser,updateUser,removeUser}=require('./user.conrtroler')

router.route('/getuser').get(getUser)
router.route('/createUser').post(createUser)
router.route('/updateUser/:id').put(updateUser)
router.route('/removeuser/:id').delete(removeUser)

module.exports=router;