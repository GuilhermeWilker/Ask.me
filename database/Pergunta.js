const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("perguntas", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    limit: 2,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    limit: 2,
  },
});

Pergunta.sync({ force: false }).then(() => {});

module.exports = Pergunta;
