const {DataTypes} = require('sequelize');
const sequelize = require('../config/database')

const cars = sequelize.define('cars', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    brand: { type:DataTypes.STRING, allowNull: false},
    model: { type:DataTypes.STRING, allowNull: false},
    year: { type:DataTypes.INTEGER, allowNull: false},
    plate: { type:DataTypes.STRING, allowNull: false}
 }, { timestamps: true, createdAt: 'created_at', updatedAt: false })

sequelize.sync();

module.exports = cars;