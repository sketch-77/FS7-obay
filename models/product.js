'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};