var express = require("express");
var router = express.Router();
var models = require("../models");

/* GET users listing. */
// (/users)
router.get("/", function (req, res, next) {
  models.User.findAll()
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(users));
});

router.post("/", function (req, res) {
  const { firstname, lastname, email, password } = req.body;
  models.User.create({ firstname, lastname, email, password })
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send(err));
});

// const getOneUser = (req, res) => {
//   console.log("the getOneUser is here");
//   let { userId } = req.params;
//   try {
//     models.user
//       .findOne({
//         where: { id: userId },
//       })
//       .then((user) => {
//         console.log(user);
//         res.send(user);
//       }); // equal to then(res.send)
//   } catch (error) {
//     console.log(error);
//   }
// };

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

module.exports = router;
