'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// const express = require("express");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// // import passport and passport-jwt modules
// const passport = require("passport");
// const passportJWT = require("passport-jwt");
// // ExtractJwt to help extract the token
// let ExtractJwt = passportJWT.ExtractJwt;
// // JwtStrategy which is the strategy for the authentication
// let JwtStrategy = passportJWT.Strategy;
// let jwtOptions = {};
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// jwtOptions.secretOrKey = "wowwow";



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// check the databse connection
sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
.catch(err => console.error("Unable to connect to the database: ", err));



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
