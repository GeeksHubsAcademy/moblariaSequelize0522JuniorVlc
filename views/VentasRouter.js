

const express = require('express');
const router = express.Router();

const VentasController = require('../controllers/VentasController');


//Endpoint-function links
router.get('/:id', VentasController.getAllVentas);



//Export
module.exports = router;