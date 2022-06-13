

const express = require('express');
const router = express.Router();

const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const ClientesController = require('../controllers/ClientesController');


//Endpoint-function links
router.get('/', auth, ClientesController.getClientes);
router.post('/addcliente', ClientesController.postCliente);
router.post('/login', ClientesController.loginCliente);


//Export
module.exports = router;