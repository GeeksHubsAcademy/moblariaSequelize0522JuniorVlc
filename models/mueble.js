'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mueble extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Mueble.hasMany(models.Venta, {
        //En este caso, foreignKey hace referencia a como se llama la clave de user en la tabla Sale
        foreignKey: 'muebleId'
      });

      Mueble.belongsTo(models.Proveedore, {
        //userId es la clave importada en este caso
        foreignKey: 'idProveedor'
      });
    }
  };
  Mueble.init({
    idProveedor: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mueble',
  });
  return Mueble;
};