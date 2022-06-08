'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //La parte belongsTo (pertenece a) S I E M P R E se anota en la tabla intermedia, que en este caso es esta misma, SALE.
      Venta.belongsTo(models.Cliente, {
        //userId es la clave importada en este caso
        foreignKey: 'clienteId'
      });

      Venta.belongsTo(models.Mueble, {
        //userId es la clave importada en este caso
        foreignKey: 'muebleId'
      });

    }
  };
  Venta.init({
    clienteId: DataTypes.INTEGER,
    muebleId: DataTypes.INTEGER,
    importe: DataTypes.INTEGER,
    pago: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Venta',
  });
  return Venta;
};