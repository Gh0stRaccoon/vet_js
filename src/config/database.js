const { Sequelize } = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false, // Opcional, para no saturar los logs en Vercel
});

module.exports = { sequelize };
// postgres://postgres.cgjazmirtojrrroeicav:nkpr3b6ymT3vUXFk@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x
// postgres://postgres.cgjazmirtojrrroeicav:nkpr3b6ymT3vUXFk@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true
