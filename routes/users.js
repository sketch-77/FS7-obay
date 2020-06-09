let express = require("express");
let router = express.Router();
let models = require("../models/index");
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
let strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
  //add async function
  console.log("payload received", jwt_payload);
  let user = await getUser({ id: jwt_payload.id }); //Add await
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
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
  const { email, password } = req.body;
  if (email && password) {
    // we get the user with the email and save the resolved promise returned
    let user = await getUser({ email });
    console.log(user);

    if (!user) {
      res.status(401).json({ msg: "No such user found", user });
    }
    if (user.password === password) {
      // from now on we’ll identify the user by the id and the id is
      // the only personalized value that goes into our token
      let payload = { id: user.id };
      console.log("token ok!");
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: "ok", token: token});
    } else {
      res.status(401).json({ msg: "Password is incorrect" });
    }
  }
});

// Test protected route
// router.get(
//   "/protected",
//   passport.authenticate("jwt", { session: false }),
//   function (req, res) {
//     res.json({
//       msg: "Congrats! You are seeing this because you are authorized",
//     });
//   }
// );

// retrieve user by id once it has been authenticated
// findById
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    // console.log(req.user);
    res.json({
      msg: "Congrats! You are seeing this because you are authorized",
      user: req.user,
    });
  }
);

const getAllUsers = (req, res) => {
  try {
    models.User.findAll()
      .then((users) => {
        // console.log(users);
        res.send(users);
      })
      .catch((error) => res.send(error));
  } catch (error) {
    console.log(error);
  }
};

/* GET all users */
router.get("/", getAllUsers);

// /* Create  user */
// router.post("/", (req, res) => {
//     const {email, password, firstName, lastName} = req.body;
//     models.User.create({email, password, firstName, lastName})
//         .then((user) => res.send(user))
//         .catch((err) => res.status(500).send(err));
// });

/* CREATE a new user */
router.post("/register", function (req, res) {
  console.log("Iam hereeee", req.body);
  const { firstName, lastName, email, password } = req.body;
  models.User.create({ firstName, lastName, email, password })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

/* Get UserById */
router.get("/:id", function (req, res, next) {
  const { id } = req.params;

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

  User.findAll({ where: { id } })
    .then((user) => {
      if (!user.length) {
        return res.json({ msg: "user not found" });
      }
      res.json({ user });
    })
    .catch((err) => res.status(500).json({ err }));
};

module.exports = router;
