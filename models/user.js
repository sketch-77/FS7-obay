"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.product, { foreignKey: "sellerId" });
  };
  return User;
};
