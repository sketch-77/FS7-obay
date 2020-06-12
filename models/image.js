"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Images",
    {
      productId: DataTypes.STRING,
      path: DataTypes.STRING,
    },
    {}
  );
  Image.associate = (models) => {
    // associations can be defined here
    Image.belongsTo(models.Product, {
      as: "product",
      allowNull: false,
    });
  };
  return Image;
};
