/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const NumeroSorteado = sequelize.define('NumeroSorteado', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    tableName: 'numeros_sorteados',
    timestamps:false
  });

  return NumeroSorteado;

};
