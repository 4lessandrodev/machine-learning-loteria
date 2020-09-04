'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('concursos', {
    'id': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'data': {
      type: Sequelize.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'arrecadacao_total': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'ganhadores_15_numeros': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ganhadores_14_numeros': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ganhadores_13_numeros': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ganhadores_12_numeros': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ganhadores_11_numeros': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'valor_rateio_15_numeros': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_rateio_14_numeros': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_rateio_13_numeros': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_rateio_12_numeros': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_rateio_11_numeros': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'estimativa_premio': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_acumulado_15_numeros': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_acumulado_especial': {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('concursos');
  }
};
