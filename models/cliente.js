'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Cliente.hasMany(models.Venta, {
        //En este caso, foreignKey hace referencia a como se llama la clave de user en la tabla Sale
        foreignKey: 'clienteId'
      });
    }
  };
  Cliente.init({
    name: DataTypes.STRING,
    dni: DataTypes.STRING,
    rol: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};