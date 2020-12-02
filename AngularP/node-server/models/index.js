const dbConfig = require("../db/db.Config.js");

const { Pool, Client } = require("pg");


const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.organisation = require("./organisation.js")(sequelize, Sequelize);
db.constabtValues = require("./ConstantValues.js")(sequelize, Sequelize);

module.exports = db;
