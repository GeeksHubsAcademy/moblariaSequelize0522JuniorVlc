

const express = require('express');
const router = express.Router();

const ProveedoresController = require('../controllers/ProveedoresController');


//Endpoint-function links
router.get('/', ProveedoresController.getProveedores);
router.post('/addproveedor', ProveedoresController.postProveedor);


//Export
module.exports = router;