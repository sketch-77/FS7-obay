"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      productId: DataTypes.STRING,
      path: DataTypes.STRING,
    },
    {}
  );
  Image.associate = (models) => {
    // associations can be defined here
    Image.belongsTo(models.Product);
  };
  return Image;
};
