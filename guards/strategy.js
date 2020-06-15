let models = require("../models/index");


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

//get user
const getUser = async (obj) => {
    return await models.User.findOne({
        where: obj,
    });
};

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
    //add async function
    console.log("payload received", jwt_payload);
    let user = await getUser({id: jwt_payload.id}); //Add await
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});

module.exports = strategy;