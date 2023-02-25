const Sequelize = require('sequelize')
require('dotenv').config()

const DB = process.env.MYSQL_DB
const USER = process.env.MYSQL_USER
const PASSWORD = process.env.MYSQL_PASSWORD
const HOST = process.env.MYSQL_HOST

const database = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});

database.authenticate()
.then(() => {
    console.log("Conexão com MySQL bem sucedida!")
}).catch(() => {
    console.log("Conexão com MYSQL não realizada")
})

module.exports = database
