'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('frequencias', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'frequencia': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'numero_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'numeros_sorteados',
        key: 'id'
      }
    }
       });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('frequencias'); 
  }
};
