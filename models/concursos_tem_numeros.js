/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('concursos_tem_numeros', {
    'concurso_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'concursos',
        key: 'id'
      }
    },
    'numero_id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'numeros_sorteados',
        key: 'id'
      }
    }
  }, {
    tableName: 'concursos_tem_numeros'
  });
};
