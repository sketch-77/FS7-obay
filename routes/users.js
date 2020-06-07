var express = require("express");
var router = express.Router();
var models = require("../models/index");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// import passport and passport-jwt modules
const passport = require("passport");
const passportJWT = require("passport-jwt");

// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;

// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log("payload received", jwt_payload);
    let user = getUser({id: jwt_payload.id});
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});
// use the strategy
passport.use(strategy);

router.use(passport.initialize());

//get user
const getUser = async obj => {
    return await models.User.findOne({
        where: obj,
    });
};

// login route
router.post(`/login`, async function (req, res, next) {
    console.log(req.body)
    const {email, password} = req.body;
    if (email && password) {
        // we get the user with the email and save the resolved promise returned
        let user = await getUser({email});
        console.log(user)

        if (!user) {
            res.status(401).json({msg: "No such user found", user});
        }
        if (user.password === password) {
            // from now on we’ll identify the user by the id and the id is
            // the only personalized value that goes into our token
            let payload = {id: user.id};
            let token = jwt.sign(payload, jwtOptions.secretOrKey);
            res.json({msg: "ok", token: token});
        } else {
            res.status(401).json({msg: "Password is incorrect"});
        }
    }
});

// protected route
router.get('/protected', passport.authenticate('jwt', {session: false}), function (req, res) {
    res.json({msg: 'Congrats! You are seeing this because you are authorized'});
});


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

/* Create  user */
router.post("/", (req, res) => {
    const {email, password, firstName, lastName} = req.body;
    models.User.create({email, password, firstName, lastName})
        .then((user) => res.send(user))
        .catch((err) => res.status(500).send(err));
});


// //get user by email/password
// router.get("/", (req, res, next) => {
//     console.log("this is req.body from get user by email and password: ", req.body)
//     const { email, password } = req.body;
//     models.User.findOne({
//         where: {
//             email, password
//         }
//     })
//         .then((user) => res.send(user))
//         .catch((err) => res.status(500).send(err));
// })

module.exports = router;