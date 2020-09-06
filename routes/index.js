var express = require('express');
const concursoController = require('../controllers/concursoController');
var router = express.Router();


/* GET home page. */
router.get('/', concursoController.index);

router.get('/mais-sorteados', concursoController.numerosMaisSorteados);

router.get('/ultimo-sorteio', concursoController.ultimoSorteio);

router.get('/emulador', async function (req, res) {
    const retorno = await concursoController.index(req, res);
    res.render('index', { title: 'Gerador', numeros:retorno.resultado });
});

module.exports = router;
