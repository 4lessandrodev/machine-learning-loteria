const { Concurso, NumeroSorteado, Frequencia } = require('../models');
const algoritmo = require('../middlewares/algoritmo');
const result = require('../middlewares/result');
module.exports = {
    
    index: async (req, res) => {
        try {

            let { quantidade = 15, peso='nao', acumulados='nao' } = req.query;
            let concursos = [];
            let ultimosConcursos = [];


            const geral = await Concurso.findAll({
                include: [
                    {
                        model: NumeroSorteado,
                        as:'numeros',
                        required: true,
                        attributes:['numero']
                    }
                ],
                order: [['id', 'ASC']],
            });

            if (peso === 'sim') {
                concursos = await Concurso.findAll({
                    include: [
                        {
                            model: NumeroSorteado,
                            as: 'numeros',
                            required: true,
                            attributes: ['numero']
                        }
                    ],
                    limit: 700,
                    order: [['id', 'DESC']],
                });
            }

            if (acumulados === 'sim') {
                ultimosConcursos = await Concurso.findAll({
                    include: [
                        {
                            model: NumeroSorteado,
                            as: 'numeros',
                            required: true,
                            attributes: ['numero']
                        }
                    ],
                    where: { ganhadores_15_numeros: 0 },
                    order: [['id', 'DESC']],
                });
            }

            await algoritmo.apuracao([...concursos, ...ultimosConcursos, ...geral]);    
            const resultado = await result.calculate();
            return ({ resultado: resultado.slice(0, quantidade) });
            
        } catch (error) {
            console.error(error.message);
            return status(500).json({ error: error.message });
        }
    },

    numerosMaisSorteados: async (req, res) => {
        try {
            const numeros = await Frequencia.findAll({
                attributes: ['frequencia', 'numero_id'],
                order:[['frequencia', 'DESC']]
            });
            return res.status(200).json({ numeros });
        } catch (error) {
            console.error(error.message);
            return status(500).json({ error: error.message });
        }
    },

    ultimoSorteio: async (req, res) => {
        try {
            const sorteio = await Concurso.findAll({
                include: [
                    {
                        model: NumeroSorteado,
                        as: 'numeros',
                        required: true,
                        attributes: ['numero']
                    }
                ],
                limit: 1,
                order: [['id', 'DESC']],
            });

            return res.status(200).json({ sorteio });
            
        } catch (error) {
            console.error(error.message);
            return status(500).json({ error: error.message });
        }
    },

    algoritmo: async (req, res)=>{
        try {
            let { quantidade = 15, peso='nao', acumulados='nao' } = req.query;
            let concursos = [];
            let ultimosConcursos = [];


            const geral = await Concurso.findAll({
                include: [
                    {
                        model: NumeroSorteado,
                        as:'numeros',
                        required: true,
                        attributes:['numero']
                    }
                ],
                order: [['id', 'ASC']],
            });

            if (peso === 'sim') {
                concursos = await Concurso.findAll({
                    include: [
                        {
                            model: NumeroSorteado,
                            as: 'numeros',
                            required: true,
                            attributes: ['numero']
                        }
                    ],
                    limit: 700,
                    order: [['id', 'DESC']],
                });
            }

            if (acumulados === 'sim') {
                ultimosConcursos = await Concurso.findAll({
                    include: [
                        {
                            model: NumeroSorteado,
                            as: 'numeros',
                            required: true,
                            attributes: ['numero']
                        }
                    ],
                    where: { ganhadores_15_numeros: 0 },
                    order: [['id', 'DESC']],
                });
            }

            await algoritmo.apuracao([...concursos, ...ultimosConcursos, ...geral]);    
            const resultado = await result.calculate();
            return res.status(200).json({ resultado: resultado.slice(0, quantidade) });

        } catch (error) {
            console.error(error.message);
            return status(500).json({ error: error.message });  
        }
    }
    
};