const { Sequelize, DataTypes } = require("sequelize");

const maindb = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  timezone: "+07:00",
  define: {
    freezeTableName: true, //disable pluarlize table name (added name table with s if false)
    timestamps: false,
  },
  //logging: false,
});

const users = require("../models/users");

module.exports = {
  users: users(maindb, DataTypes),
};
