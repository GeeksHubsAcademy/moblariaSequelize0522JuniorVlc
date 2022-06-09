

//Imports
const router = require('express').Router();

const ClientesRouter = require('./views/ClientesRouter');
const MueblesRouter = require('./views/MueblesRouter');
const ProveedoresRouter = require('./views/ProveedoresRouter');

router.use('/clientes', ClientesRouter);
router.use('/muebles', MueblesRouter);
router.use('/proveedores', ProveedoresRouter);

//Export

module.exports = router;