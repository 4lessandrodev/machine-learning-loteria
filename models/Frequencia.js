/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Frequencia', {
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
  }, {
    tableName: 'frequencias',
    timestamps:false
  });
};
