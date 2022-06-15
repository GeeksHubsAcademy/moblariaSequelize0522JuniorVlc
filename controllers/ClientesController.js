

const { Cliente } = require('../models/index');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let authConfig = require('../config/auth');

//UserController object declaration
const ClientesController = {};

ClientesController.getClientes = (req, res) => {
    //Esta funcion llamada findAll es una funcion de Sequelize
    Cliente.findAll()
    .then(data => {
    
        res.send(data)
    });
};

ClientesController.postCliente = async (req, res) => {

    let name = req.body.name;
    let dni = req.body.dni;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    Cliente.create({
        name: name,
        dni: dni,
        password: password
    }).then(cliente => {
        res.send(`${cliente.name}, you have been added succesfully`);

    }).catch((error) => {
        res.send(error);
    });
    
    
};

ClientesController.loginCliente = (req, res) => {

    let documentacion = req.body.dni;
    let clave = req.body.password;

    
    Cliente.findOne({
        where : {dni : documentacion}

    }).then(usuarioEncontrado => {

        if(usuarioEncontrado?.dataValues.id == null){
            res.send("Usuario o password incorrectos");
        } else {
            // if( bcrypt.compareSync(clave, usuarioEncontrado.password)){
                //Ahora ya si hemos comprobado que el usuario existe (email es correcto) y el password SI corresponde a ese usuario

                //generamos el token, pasándole como primer argumento el usuarioEncontrado, segundo argumento es la frase secreta.
                let token = jwt.sign({ user: usuarioEncontrado }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });

                console.log(token);
                
                let loginOKmessage = `Welcome again ${usuarioEncontrado.name}`
                res.json({
                    loginOKmessage,
                    user: usuarioEncontrado,
                    token: token
                })
            // };
        };

    }).catch(err => console.log(err));
};

//Export
module.exports = ClientesController;