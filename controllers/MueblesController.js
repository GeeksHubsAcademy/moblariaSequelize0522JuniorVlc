

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


MueblesController.searchMueble = async (req, res) => {

    //En este caso, al tratarse de un GET y pasarle los parámetros por URL,
    // la forma de hacerlo no es con req.body, sino con req.params
    let modelo = req.params.model;
    
    Mueble.findAll({
        //A la clausula where le especificamos el campo donde buscar, en este caso
        //el campo es nombre, y el valor que comparamos es modelo, que lo hemos
        //obtenido desde la Url.
        where : { nombre : modelo}
    })
    .then(resultadoBusqueda => {

        //Una vez entramos en el then, en la variable resultadoBusqueda se almacenará el resultado de la búsqueda
        //Procedemos a hacer un if para comprobar si este resultado tiene contenido o es un array vacio

        //SIEMPRE DEVUELVE UN ARRAY, en caso de que sea un findAll, findOne NO devuelve un array.

        //Respecto a la comparacion, estoy buscando si la posicion 0 del array está llena, y por lo tanto dentro de ella
        //la propiedad dataValues.nombre sería DISTINTA a undefined-.

        //Obviamente si el array viene vacio, es que no ha encontrado nada.

        if(resultadoBusqueda[0]?.dataValues.nombre != undefined){
            res.send(resultadoBusqueda);
        }else{
            res.send("No encontramos el mueble que ud desea");
        }

    })
    .catch(err => console.log(err));
    
}


//Export
module.exports = MueblesController;