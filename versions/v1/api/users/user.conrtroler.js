const bcrypt = require('bcrypt');
const db = require("./user.model");
const pdb=require('../posts/post.model')
const jwt = require("jsonwebtoken")



exports.getUser = async (req, res) => {
    try {
        await db.aggregate([{
            $lookup: {
                from: "posts",
                localField: "posts",
                foreignField: "user.id",
                as: "user"
            }
        }]).then((allUser)=>{
            res.status(200).json({ data: allUser})
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}

exports.createUser = async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: bcrypt.hashSync(req.body.password, 10),
        }
        await db.insertMany(userData)
            .then(async (result) => {
                const Token=await jwt.sign(result[0].toJSON(),process.env.TOKEN_SECRET,{ expiresIn: '48h' })
                res.cookie("token",Token).status(200).send({ message: result,token:Token})
            }).catch((err) => {
                res.status(500).send({ message: err.message })
            });
    }
    catch (er) {
        console.log(er);
        res.send(er.message)
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile
        }
        await db.findByIdAndUpdate(req.params.id,
            {
                $set: userData,
            })
            .then((result) => {
                res.status(200).send({ message: "successfull upaded in databases.." })
            }).catch((err) => {
                res.status(500).send({ message: err.message })
            });
    }
    catch (er) {
        console.log(er);
        res.send(er.message)
    }
};



exports.removeUser=async (req,res)=>{
    try {
        db.findByIdAndDelete(req.params.id)
        .then(data => {
         res.status(200).send(data);
        })
        .catch(error => {
         res.status(500).send({ error:error.message});
        });
    } catch (error) {
        console.log(error);
    }
}


