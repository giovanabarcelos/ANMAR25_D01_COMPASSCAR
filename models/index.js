const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const DataTypes = Sequelize.DataTypes;

const cars = require('./cars')(sequelize, DataTypes);
const cars_items = require('./cars_items')(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  cars,
  cars_items
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync()

module.exports = db;
