'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      this.belongsTo(models.Area)
    }
  };
  Curso.init({
    sigla: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [4, 4],
          msg: "A sigla precisa conter 4 caracteres."
        }
      }
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 40],
          msg: "O nome do curso precisa conter entre 3 e 40 caracteres."
        }
      }
    },
    descricao:{
      allowNull: false,
      type: DataTypes.TEXT
    },
    areaId:{
      allowNull: false,
      type: DataTypes.INTEGER
    }  
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};