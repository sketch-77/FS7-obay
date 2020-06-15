var express = require("express");
var router = express.Router();
var models = require("../models/index");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require("uuid");
var mime = require("mime-types");
const strategy = require("../guards/strategy");
const userMustBeLoggedIn = require("../guards/userMustBeLoggedIn")

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

// /* CREATE a new product */
// router.post("/", function (req, res) {
//   console.log("I am hereeee", req.body);
//   const { category, price, description, title, sellerId } = req.body;
//   const { img } = req.files;
//
//   var extension = mime.extension(img.mimetype);
//   var filename = uuidv4() + "." + extension;
//
//   var tmp_path = img.tempFilePath;
//   var target_path = path.join(__dirname, "../public/img/") + filename;
//
//   fs.rename(tmp_path, target_path, function (err) {
//     if (err) throw err;
//
//     //at this point, filename contains the path of the image
//
//     try {
//       models.Product.create({
//         category,
//         price,
//         description,
//         img: filename,
//         title,
//         sellerId
//       }).then((product) => {
//         console.log(product);
//         res.send(product);
//       });
//     } catch (err) {
//       console.log("this is error ", err);
//       res.status(500).send(err);
//     }
//   });
// });



/* CREATE a new product PROTECTED ROUTE */
router.post("/", userMustBeLoggedIn, function (req, res) {
  console.log("I am hereeee", req.body);
  const { category, price, description, title, sellerId } = req.body;
  const { img } = req.files;

  var extension = mime.extension(img.mimetype);
  var filename = uuidv4() + "." + extension;

  var tmp_path = img.tempFilePath;
  var target_path = path.join(__dirname, "../public/img/") + filename;

  fs.rename(tmp_path, target_path, function (err) {
    if (err) throw err;

    //at this point, filename contains the path of the image

    try {
      models.Product.create({
        category,
        price,
        description,
        img: filename,
        title,
        sellerId
      }).then((product) => {
        console.log(product);
        res.send(product);
      });
    } catch (err) {
      console.log("this is error ", err);
      res.status(500).send(err);
    }
  });
});


/* Get ProductById */
router.get("/:id", function (req, res, next) {
  const { id } = req.params;

  models.Product.findOne({
    where: {
      id,
    },
  })
    .then((product) => res.send(product))
    .catch((err) => res.status(500).send(product));
});
// router.delete("/:id", (req, res) => {
//   console.log(req.params);
//   let { id } = req.params;
//   try {
//     models.product
//       .destroy({
//         where: { id },
//       })
//       .then(getAllProducts(req, res));
//   } catch (error) {
//     console.log(error);
//   }
// });

// You can test your API in http://localhost:5000/product/images
// router.get("/product/images/filename")

module.exports = router;
