'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {await queryInterface.sequelize.query(`
CREATE TRIGGER atualizar_frequencia_mais AFTER INSERT ON concursos_tem_numeros FOR EACH ROW
  BEGIN

	  UPDATE frequencias SET frequencia = frequencias.frequencia + 1 
    WHERE numero_id = NEW.numero_id;

  END`);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.sequelize.query('DROP TRIGGER atualizar_frequencia_mais');
  }
};
