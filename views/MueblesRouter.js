

const express = require('express');
const router = express.Router();

const isAdmin = require('../middlewares/isAdmin');
const MueblesController = require('../controllers/MueblesController');


//Endpoint-function links
router.get('/', isAdmin, MueblesController.getMuebles);
router.post('/addmueble', MueblesController.postMueble);
router.get('/search/:model', MueblesController.searchMueble);


//Export
module.exports = router;