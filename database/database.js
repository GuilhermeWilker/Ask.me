const { Sequelize } = require("sequelize");

const connection = new Sequelize("perguntas", "root", "Gwfc358651", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
