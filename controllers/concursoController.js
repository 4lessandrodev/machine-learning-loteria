const { Concurso } = require('../models');
module.exports = {

    index: async (req, res) => {
        try {
            const concursos = await Concurso.findAll({ limit: 10 });
            return res.status(200).json({ concursos });
        } catch (error) {
            console.error(error.message);
            return status(500).json({ error: error.message });
        }
    }

};