'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('numeros_sorteados', { 
  'id': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'numero': {
      type: Sequelize.INTEGER(2),
      allowNull: false,
      comment: "null"
    }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('numeros_sorteados');
  }
};
