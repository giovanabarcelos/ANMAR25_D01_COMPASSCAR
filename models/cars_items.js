const {DataTypes} = require('sequelize');
const sequelize = require('../config/database')
const cars = require('./cars')

const cars_items = sequelize.define('cars_items', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type:DataTypes.STRING, allowNull: false},
    car_id: { type:DataTypes.INTEGER, allowNull: false, 
              references: {
                model: 'cars', 
                key: 'id'
              },
              onDelete: 'NO ACTION',
              onUpdate: 'NO ACTION'
    }},
    { timestamps: true, createdAt: 'created_at', updatedAt: false })

sequelize.sync();

module.exports = cars_items;
