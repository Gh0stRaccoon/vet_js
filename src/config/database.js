const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  // logging: false,
  ssl: true,
});

module.exports = { sequelize };
