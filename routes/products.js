var express = require("express");
var router = express.Router();
var models = require("../models/index");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

//get product
const getProduct = async (obj) => {
    return await models.Product.findOne({
        where: obj,
    });
};

const getAllProducts = (req, res) => {
    try {
        models.Product.findAll()
            .then((products) => {
                // console.log(products);
                res.send(products);
            })
            .catch((error) => res.send(error));
    } catch (error) {
        console.log(error);
    }
};

/* GET all products */
router.get("/", getAllProducts);

// /* Create  product */
// router.post("/", (req, res) => {
//     const {email, password, firstName, lastName} = req.body;
//     models.Product.create({email, password, firstName, lastName})
//         .then((product) => res.send(product))
//         .catch((err) => res.status(500).send(err));
// });

/* CREATE a new product */
router.post("/", function (req, res) {
    console.log("Iam hereeee", req.body);
    const {category, price, description, img, title} = req.body;
    try {
        models.Product.create({category, price, description, img, title})
            .then((product) => {
                    console.log(product)
                    res.send(product)
                }
            )
    } catch (err) {
        console.log("this is error ", err);
        res.status(500).send(err);
    }
});

/* Get ProductById */
router.get("/:id", function (req, res, next) {
    const {id} = req.params;

    models.Product.findOne({
        where: {
            id,
        },
    })
        .then((product) => res.send(product))
        .catch((err) => res.status(500).send(product));
});

module.exports = router;
