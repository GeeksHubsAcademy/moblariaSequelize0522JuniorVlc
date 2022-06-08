

const { Proveedore } = require('../models/index');

//UserController object declaration
const ProveedoresController = {};

ProveedoresController.getProveedores = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Proveedore.findAll()
    .then(data => {
    
        res.send(data)
    });
};

ProveedoresController.postProveedor = async (req, res) => {

    let nombre = req.body.nombre;
    let telefono = req.body.telefono;
    

    Proveedore.create({
        nombre: nombre,
        telefono: telefono
    }).then(mueble => {
        res.send(`${mueble.nombre}, you have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });


};

//Export
module.exports = ProveedoresController;