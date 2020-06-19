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
    console.log(`GET ALL PRODUCTS`);

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
    const {sellerId} = req.user.id;
    console.log(`DELETING PRODUCT if the user ID: ${req}`);
    console.log(`GET ALL PRODUCTS OF THE USER WITH ID: ${sellerId}`);
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
    console.log(`SEARCHING PRODUCTS BY KEYWORD OR GETTING ALL PRODUCTS`);
    console.log(req.query);
    const {q} = req.query;
    const Op = Sequelize.Op;
    const params = q ? {
        where: {
            [Op.or]: [
                {title: {[Op.like]: `%${q.toLowerCase()}%`}},
                {description: {[Op.like]: `%${q.toLowerCase()}%`}}
            ]
        }
    } : {};
    try {
        models.Product.findAll(
            params
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
    const {sellerId} = req.user.id;
    console.log(`CREATE PRODUCT FOR USER WITH ID: ${sellerId}`);
    console.log(req.user);

    const {category, price, description, title} = req.body;
    const {img} = req.files;

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
    console.log(`SEARCHING PRODUCT WITH ID: ${id}`);

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
    let {id} = req.params;
    console.log(`DELETING PRODUCT WITH ID: ${id}`);
    const {sellerId} = req.user.id;
    console.log(`DELETING PRODUCT of the user ID: ${req.user.id}`);
    try {
        models.Product.destroy({where:{
            id
            }})
            .then((product) => {
                res.status(200).send(id);
            })
    } catch (error) {
        console.log(error);
    }
});

// You can test your API in http://localhost:5000/product/images
// router.get("/product/images/filename")

module.exports = router;