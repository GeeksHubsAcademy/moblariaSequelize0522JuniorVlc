

//Imports
const router = require('express').Router();

const MueblesRouter = require('./views/MueblesRouter');
const ProveedoresRouter = require('./views/ProveedoresRouter');

router.use('/muebles', MueblesRouter);
router.use('/proveedores', ProveedoresRouter);

//Export

module.exports = router;