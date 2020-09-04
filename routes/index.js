var express = require('express');
const concursoController = require('../controllers/concursoController');
var router = express.Router();


/* GET home page. */
router.get('/', concursoController.index);

module.exports = router;
