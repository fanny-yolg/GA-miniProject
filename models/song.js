'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.Movie)
    }
  };
  Song.init({
    featured_song: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "feature song must be filled ."
        }
      }
    },
    artist: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg: "artist must be filled"
        }
      }
    },
    MovieId : {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty : {
          msg: "artist must be filled"
        }
      } 
    },
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};