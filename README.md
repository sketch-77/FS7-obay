# Obay

In this repository, you will use build a full stack Fodder app using React, Node/Express, and MySQL with Sequelize.

## Objectives

- Build a database.
- Build an API server.
- Create a front end.

## Setup

### Dependencies

In **root** folder of the project run `npm install` to install dependencies related to Express.

In **client** folder the project run `npm install` to install dependencies related to React.
Run `npm i sequelize mysql` to install sequelize with mysql
Run `npm install --save-dev sequelize-cli` to install sequlize cli


### Database Prep

Create `.env` file in project directory and add

```
DB_HOST=localhost
DB_NAME=fodder
DB_USER=root
DB_PASS=YOUR_PASSWORD
PORT: 5000
```

(replace `YOUR_PASSWORD` with your actual password)

Alternatively, you can rename the provided `.env.example` file to `.env`.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Type `mysql -u root -p` to access the MySQL CLI using your password.
Run `create database obay;` to create database.

### Migrations

To run migration `node ./node_modules/sequelize-auto-migrations/bin/runmigration`.
This will run scripts from the **migrations** folder and create database tables.

Go to the MySQL CLI (if open) or type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI run `show databases;` and ensure 'foodder' database was created.
Then run `use obay;` and then `show tables;` to ensure all 'user', 'meal', 'order' tables were created;

If you make any changes in the models to apply them you will need to create a new migration files by running the following command in the root of the folder:
`node ./node_modules/sequelize-auto-migrations/bin/makemigration`.
This will automatically generate a new migration file "# - noname.js" in the **migrations** folder in the root of the project.
Then to apply these changes you will need to run the following command:
`node ./node_modules/sequelize-auto-migrations/bin/runmigration`

### Run Your Development Servers

- In the **root** folder run `npm start` to start the server.
- In the **client** folder run `npm start` to start client.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience.
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/`

## DB schema
[Schema](https://app.dbdesigner.net/designer/schema/0-obay)
![DB Schema](/Volumes/oj/CodeOp/weeks911/FS7-obay/public/images/DBSchema.png)

## Routes
| ROUTE            | HTTP Method | Description                                                       |   |
|------------------|-------------|-------------------------------------------------------------------|---|
| /users/login     | POST        | Log in                                                            |   |
| /users/register  | POST        | Add new user                                                      |   |
| /users/:id       | GET         | Get user by id                                                    |   |
| /users/profile   | GET         | Get profile PROTECTED                                             |   |
| /products        | GET         | Get all products or Get all products of the user                  |   |
| /products        | POST        | CREATE a new product PROTECTED ROUTE                              |   |
| /products/:id    | GET         | Get Product By Id                                                 |   |
| /products/:id    | DELETE      | Delete product that belongs to current user by ID PROTECTED ROUTE |   |
| /products/search | GET         | Get all products or Search products by keyword                    |   |

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Documentation](https://reactjs.org/docs/hello-world.html)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._