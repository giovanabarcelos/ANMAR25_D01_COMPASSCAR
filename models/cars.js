module.exports = (sequelize, DataTypes) => {
    const cars = sequelize.define('cars', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      brand: { type: DataTypes.STRING, allowNull: false },
      model: { type: DataTypes.STRING, allowNull: false },
      year: { type: DataTypes.INTEGER, allowNull: false },
      plate: { type: DataTypes.STRING, allowNull: false }
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    });
  
    cars.associate = (models) => {
      cars.hasMany(models.cars_items, {
        foreignKey: 'car_id',
        as: 'cars_items',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
      });
    };
  
    return cars;
  };
  