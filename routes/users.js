var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("send user info");
});


//get user by email/password
router.get("/", (req, res, next) => {
    console.log("this is req.body from get user by email and password: ", req.body)
    const { email, password } = req.body;

})

router.post("/", function(req, res) {

    models.Artist.create({ name })
        .then((artist) => res.send(artist))
        .catch((err) => res.status(500).send(err));
});




module.exports = router;