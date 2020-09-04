/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('numeros_sorteados', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'numero': {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'numeros_sorteados'
  });
};
