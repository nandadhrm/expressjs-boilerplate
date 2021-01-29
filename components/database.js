const { Sequelize, DataTypes } = require("sequelize");

const maindb = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  timezone: "+07:00",
  logging: false,
  define: {
    freezeTableName: true, //disable pluarlize table name
    timestamps: false,
  },
});

maindb
  .authenticate()
  .then(() => console.log(`Connected to database : ${process.env.DB_HOST}:${process.env.DB_PORT}`))
  .catch(() => console.error(`Unable to connect to the database!`));

const users = require("../models/users");

module.exports = {
  users: users(maindb, DataTypes),
};
