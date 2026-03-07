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
// postgres://postgres.cgjazmirtojrrroeicav:nkpr3b6ymT3vUXFk@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x
// postgres://postgres.cgjazmirtojrrroeicav:nkpr3b6ymT3vUXFk@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true