const db = require('./post.model');
const udb = require('../users/user.model')

exports.createPost = async (req, res) => {
    try {
        const data = await udb.find({ email: req.data.email })
        console.log(data);
        const postData = {
            createBy: data[0]._id,
            message: req.body.message,
            comments: req.body.comments,
            sendBy: data[0]._id,
            liked: data[0]._id
        }
        await db.insertMany(postData)
            .then((data) => {
                res.status(200).json({ message: "successfully create post..." })
            }).catch((err) => {
                res.status(403).json({ error: err.message })
            })
    } catch (error) {
        console.log(error);
    }

}

exports.updatePost = async (req, res) => {
    const postData = {
        message: req.body.message,
        comments: req.body.comments,
    }
    await db.findByIdAndUpdate(req.params.id,
        {
            $set: postData
        }).then((data) => {
            res.status(200).json({ message: "successfully update post with user..." })
        }).catch((err) => {
            res.status(404).json({ message: err.message })
        })

}

exports.getAllPost = async (req, res) => {
    try {
        const data=db.findById(req.params.id)
        await udb.aggregate([{
            $lookup: {
                from: "posts",
                localField: req.params.id,
                foreignField: req.data._id,
                as: "post"
            }
        }])
            .then((result) => {
                res.status(200).send({ message: result})
            }).catch((err) => {
                res.status(404).send({ message: err.message })
            });
    } catch (error) {
        console.log(error);
    }
}

exports.removePost = async (req, res) => {
    try {
        db.findByIdAndDelete(req.params.id)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(error => {
                res.status(500).send({ message: error.message });
            });
    } catch (error) {
        console.log(error);
    }
}