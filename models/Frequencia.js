/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Frequencia = sequelize.define('Frequencia', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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

  Frequencia.associate = (models) => {
    Frequencia.belongsTo(models.NumeroSorteado, {
      as: 'freq_num',
      foreignKey: 'numero_id'
    });
  };

  return Frequencia;

};
