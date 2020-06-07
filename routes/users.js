var express = require("express");
var router = express.Router();
var models = require("../models/index");


const getAllUsers = (req, res) => {
    try {
        models.User.findAll()
            .then((users) => {
                console.log(users);
                res.send(users);
            })
            .catch((error) => res.send(error));
    } catch (error) {
        console.log(error);
    }
};

/* GET all users */
router.get("/", getAllUsers);

/* GET all users */
router.post("/",  (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    models.User.create({ email, password, firstName, lastName })
        .then((user) => res.send(user))
        .catch((err) => res.status(500).send(err));
});


//get user by email/password
router.get("/", (req, res, next) => {
    console.log("this is req.body from get user by email and password: ", req.body)
    const { email, password } = req.body;
    models.User.findOne({
        where: {
            email, password
        }
    })
        .then((user) => res.send(user))
        .catch((err) => res.status(500).send(err));
})





module.exports = router;