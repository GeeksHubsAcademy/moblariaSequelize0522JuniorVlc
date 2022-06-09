

const { Mueble } = require('../models/index');

//UserController object declaration
const MueblesController = {};

MueblesController.getMuebles = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Mueble.findAll()
    .then(data => {
    
        res.send(data)
    });
};

MueblesController.postMueble = async (req, res) => {

    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let idProveedor = req.body.idProveedor;

    if(idProveedor === null || idProveedor == "" || idProveedor == undefined){

        res.send("No has introducido el id de Proveedor");

    }else{
        Mueble.create({
            idProveedor: idProveedor,
            nombre: nombre,
            precio: precio
        }).then(mueble => {
            res.send(`${mueble.nombre}, you have been added succesfully`);
    
        }).catch((error) => {
            res.send(error);
        });
    }
    


};

//Export
module.exports = MueblesController;