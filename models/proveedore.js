'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proveedore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Proveedore.hasMany(models.Mueble, {
        //En este caso, foreignkey hace referencia a como se llama la clave de user en la tabla Rent
        foreignKey: 'idProveedor'
      });
    }
  };
  Proveedore.init({
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proveedore',
  });
  return Proveedore;
};