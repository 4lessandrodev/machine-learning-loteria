/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Concurso = sequelize.define('Concurso', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'data': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'arrecadacao_total': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'ganhadores_15_numeros': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ganhadores_14_numeros': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ganhadores_13_numeros': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ganhadores_12_numeros': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'ganhadores_11_numeros': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: "null"
    },
    'valor_rateio_15_numeros': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_rateio_14_numeros': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_rateio_13_numeros': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_rateio_12_numeros': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_rateio_11_numeros': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'estimativa_premio': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_acumulado_15_numeros': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    },
    'valor_acumulado_especial': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: "null"
    }
  }, {
    tableName: 'concursos',
    timestamps:false
  });

  Concurso.associate = (models) => {
    Concurso.belongsToMany(models.NumeroSorteado, {
      through: 'concursos_tem_numeros',
      as: 'numbers',
      foreignKey: 'concurso_id',
      timestamps: false 
    });
  };

  return Concurso;
};
