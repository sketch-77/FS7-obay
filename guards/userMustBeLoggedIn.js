const passport = require("passport");
const passportJWT = require("passport-jwt");
require("dotenv").config();

const userMustBeLoggedIn = passport.authenticate('jwt', {session: false})

module.exports = userMustBeLoggedIn;