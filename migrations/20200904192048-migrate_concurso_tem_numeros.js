'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('concursos_tem_numeros', {
    'concurso_id': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'concursos',
        key: 'id'
      }
    },
    'numero_id': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'numeros_sorteados',
        key: 'id'
      }
    }
        });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('concursos_tem_numeros');
  }
};
