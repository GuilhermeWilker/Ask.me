const { Sequelize } = require("sequelize");

const connection = new Sequelize("perguntas", "root", "02023sfds", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
