const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  // logging: false,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = { sequelize };
