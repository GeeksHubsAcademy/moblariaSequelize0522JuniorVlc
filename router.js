

//Imports
const router = require('express').Router();

const ClientesRouter = require('./views/ClientesRouter');
const MueblesRouter = require('./views/MueblesRouter');
const ProveedoresRouter = require('./views/ProveedoresRouter');
const VentasRouter = require('./views/VentasRouter');

router.use('/clientes', ClientesRouter);
router.use('/muebles', MueblesRouter);
router.use('/proveedores', ProveedoresRouter);
router.use('/ventas', VentasRouter);

//Export

module.exports = router;