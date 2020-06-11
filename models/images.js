"use strict";
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define(
    "Images",
    {
      productId: DataTypes.STRING,
      path: DataTypes.STRING,
    },
    {}
  );
  Images.associate = function (models) {
    // associations can be defined here
  };
  return Images;
};
