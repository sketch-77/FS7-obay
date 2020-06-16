'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
    {
      fn: "createTable",
          params: [
      "Products",
      {
        "id": {
          "type": Sequelize.INTEGER,
          "field": "id",
          "autoIncrement": true,
          "primaryKey": true,
          "allowNull": false
        },
        "category": {
          "type": Sequelize.STRING,
          "field": "category"
        },
        "price": {
          "type": Sequelize.INTEGER,
          "field": "price"
        },
        "description": {
          "type": Sequelize.TEXT,
          "field": "description"
        },
        "img": {
          "type": Sequelize.STRING,
          "field": "img"
        },
        "title": {
          "type": Sequelize.STRING,
          "field": "title"
        },
        "createdAt": {
          "type": Sequelize.DATE,
          "field": "createdAt",
          "allowNull": false
        },
        "updatedAt": {
          "type": Sequelize.DATE,
          "field": "updatedAt",
          "allowNull": false
        }
      },
      {
        "transaction": transaction
      }
    ]
    },
  ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
