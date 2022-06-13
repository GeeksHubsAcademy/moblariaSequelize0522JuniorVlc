

const { Venta } = require('../models/index');

//UserController object declaration
const VentasController = {};

VentasController.getAllVentas = async (req, res) => {
    
    let id = req.params.id;

    let consulta = `SELECT clientes.name AS NombresCliente, muebles.nombre AS NombresMueble, proveedores.nombre AS NombreProveedores, venta.createdAt AS FechaVenta
    FROM clientes 
    INNER JOIN venta ON clientes.id = venta.clienteId
    INNER JOIN muebles ON muebles.id = venta.muebleId
    INNER JOIN proveedores ON proveedores.id = muebles.idProveedor 
    WHERE clienteId LIKE ${id};`;

    //A continuación viene un ejemplo de ESTRUCTURA para ejecutar querys raw (crudo) de SQL en Sequelize, en este caso
    //la consulta está almacenada dentro de la variable llamada consulta. Lo que nos devuelva la consulta se guardará en la variable
    //resultado.

    let resultado = await Venta.sequelize.query(consulta, {
        type: Venta.sequelize.QueryTypes.SELECT
    });

    if(resultado != 0){
        res.send(resultado);
    }else {
        res.send("Tu búsqueda es estúpida y no trae nada");
    };

};

//Export
module.exports = VentasController;