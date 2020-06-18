const express = require("express");
const Sequelize = require('sequelize');
var router = express.Router();
var models = require("../models/index");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var fs = require("fs");
var path = require("path");
const {v4: uuidv4} = require("uuid");
var mime = require("mime-types");
const strategy = require("../guards/strategy");
const userMustBeLoggedIn = require("../guards/userMustBeLoggedIn");

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

// Get all products of the user
router.get("/", userMustBeLoggedIn, (req, res) => {
    console.log("***** MY USER FROM REQ")
    const {sellerId} = req.user.id;
    console.log(sellerId)
    try {
        req.user.getProducts().then((products) => {
            res.send(products);
        });
    } catch (err) {
        console.log("this is error ", err);
        res.status(500).send(err);
    }
});

// Get all products or Search products by keyword
router.get("/search", (req, res) => {
    console.log("***** WE ARE HERE *****");
    console.log(req.query);
    const {q} = req.query;
    const Op = Sequelize.Op;
    const params = q? {
        where: {
            [Op.or]: [
                {title: {[Op.like]: `%${q}%`}},
                {description: {[Op.like]: `%${q}%`}}
            ]
        } }: {};
    // console.log("MY REQ.QUERY")
    // console.log(req.query)
    try {
        models.Product.findAll(
            params
            // {
            //     where: {
            //         [Op.or]: [
            //                 {title: {[Op.like]: `%${q}%`}},
            //                 {description: {[Op.like]: `%${q}%`}}
            //             ]
            //     }
                // where: {
                //     [Op.or]: [
                //         // {name: {[Op.like]: `%${products}%`}},
                //         // {description: {[Op.like]: `%${products}%`}}
                //         {name: {[Op.like]: `%flower%`}},
                //         {description: {[Op.like]: `%flower%`}}
                //     ]
                // }
            // }
        ).then((product) => {
            res.send(product);
        });
    } catch (err) {
        console.log("this is error ", err);
        res.status(500).send(err);
    }
});


/* CREATE a new product PROTECTED ROUTE */
router.post("/", userMustBeLoggedIn, function (req, res) {
    // console.log("I am hereeee", req.body);
    const {category, price, description, title} = req.body;
    const {img} = req.files;
    // console.log("***** MY USER FROM REQ")
    const {sellerId} = req.user.id;
    // console.log(sellerId)

    let extension = mime.extension(img.mimetype);
    let filename = uuidv4() + "." + extension;

    let tmp_path = img.tempFilePath;
    let target_path = path.join(__dirname, "../public/img/") + filename;

    fs.rename(tmp_path, target_path, function (err) {
        if (err) throw err;
        //at this point, filename contains the path of the image
        try {
            req.user.createProduct({
                category,
                price,
                description,
                img: filename,
                title,
                sellerId
            }).then((product) => {
                res.send(product);
            });
        } catch (err) {
            console.log("this is error ", err);
            res.status(500).send(err);
        }
    });
});

/* Get Product By Id */
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

// Delete product that belongs to current user by ID
router.delete("/:id", userMustBeLoggedIn, (req, res) => {
    console.log(req.params);
    let {id} = req.params;
    const {sellerId} = req.user.id;

    try {
        models.Product.destroy({
            where: {id, sellerId}
        })
            .then(getAllProducts(req, res));
    } catch (error) {
        console.log(error);
    }
});

// You can test your API in http://localhost:5000/product/images
// router.get("/product/images/filename")

module.exports = router;
