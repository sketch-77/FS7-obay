'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Products", deps: []
 * createTable "Users", deps: []
 * createTable "Images", deps: [Products]
 *
 **/

var info = {
    "revision": 1,
    "name": "changing_product_descr_type_text",
    "created": "2020-06-14T19:33:53.062Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
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
        {
            fn: "createTable",
            params: [
                "Users",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "firstName": {
                        "type": Sequelize.STRING,
                        "field": "firstName"
                    },
                    "lastName": {
                        "type": Sequelize.STRING,
                        "field": "lastName"
                    },
                    "email": {
                        "type": Sequelize.STRING,
                        "field": "email"
                    },
                    "password": {
                        "type": Sequelize.STRING,
                        "field": "password"
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
        {
            fn: "createTable",
            params: [
                "Images",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "productId": {
                        "type": Sequelize.STRING,
                        "field": "productId"
                    },
                    "path": {
                        "type": Sequelize.STRING,
                        "field": "path"
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
                    },
                    "ProductId": {
                        "type": Sequelize.INTEGER,
                        "field": "ProductId",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "Products",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["Images", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Products", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["Users", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
