'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Actor.belongsToMany(models.Movie, { through: 'models.Character' });
    }
  };
  Actor.init({
    img_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg: "image must be filled"
        },
        isUrl : {
          msg: "must be in url format"
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty : {
          msg: "image must be filled"
        }
      }
    },  
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};