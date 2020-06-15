let express = require("express");
let router = express.Router();
let models = require("../models/index");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const strategy = require("../guards/strategy");
const userMustBeLoggedIn = require("../guards/userMustBeLoggedIn")
const secretOrKey = "wowwow";
var fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require("uuid");
var mime = require("mime-types");


// use the strategy for authentification
passport.use(strategy);

router.use(passport.initialize());

//get user
const getUser = async (obj) => {
    return await models.User.findOne({
        where: obj,
    });
};

// login route
router.post(`/login`, async function (req, res, next) {
    console.log(req.body);
    const {email, password} = req.body;
    if (email && password) {
        // we get the user with the email and save the resolved promise returned
        let user = await getUser({email});
        console.log(user);

        if (!user) {
            res.status(401).json({msg: "No such user found", user});
        }
        if (user.password === password) {
            let userData = {firstName: user.firstName, lastName: user.lastName, email: user.email}
            // from now on we’ll identify the user by the id and the id is
            // the only personalized value that goes into our token
            let payload = {id: user.id};
            console.log("token ok!");
            let token = jwt.sign(payload, secretOrKey);
            res.json({msg: "ok", token: token, user: userData});
        } else {
            res.status(401).json({msg: "Password is incorrect"});
        }
    }
});

// Get profile rote
router.get(
    '/profile',
    // passport.authenticate('jwt', {session: false}),
    userMustBeLoggedIn,
    (req, res) => {
        res.json({
            msg: 'Congrats! You are seeing this because you are authorized',
            // user: req.user,
        });
    });

const getAllUsers = (req, res) => {
    try {
        models.User.findAll()
            .then((users) => {
                res.send(users);
            })
            .catch((error) => res.send(error));
    } catch (error) {
        console.log(error);
    }
};

/* GET all users */
router.get("/", getAllUsers);

/* CREATE a new user */
router.post("/register", function (req, res) {
    console.log("Iam hereeee", req.body);
    const {firstName, lastName, email, password} = req.body;
    models.User.create({firstName, lastName, email, password})
        .then((user) => {
                let userData = {firstName: user.firstName, lastName: user.lastName, email: user.email}
                let payload = {id: user.id};
                console.log("user created");
                let token = jwt.sign(payload, secretOrKey);
                res.json({msg: "ok", token: token, user: userData});
            }
        )
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
});

/* Get UserById */
router.get("/:id", function (req, res, next) {
    const {id} = req.params;

    models.User.findOne({
        where: {
            id,
        },
    })
        .then((user) => res.send(user))
        .catch((err) => res.status(500).send(user));
});

// fetch user by userId
const findById = (req, res) => {
    const id = req.params.userId;

    User.findAll({where: {id}})
        .then((user) => {
            if (!user.length) {
                return res.json({msg: "user not found"});
            }
            res.json({user});
        })
        .catch((err) => res.status(500).json({err}));
};

module.exports = router;