const { Sequelize } = require("sequelize")

const connect = new Sequelize("tests", "root", "htmlecss", {
    dialect: "mysql",
    host: "localhost",
    timezone: "-03:00"
})

module.exports = connect