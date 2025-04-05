module.exports = (sequelize, DataTypes) => {
    const cars_items = sequelize.define('cars_items', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cars',
          key: 'id'
        },
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
      }
    }, {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    });
  
    cars_items.associate = (models) => {
      cars_items.belongsTo(models.cars, {
        foreignKey: 'car_id',
        as: 'cars'
      });
    };
  
    return cars_items;
  };
  