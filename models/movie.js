'use strict';
const sequelizePaginate = require('sequelize-paginate')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Song);
      Movie.belongsToMany(models.Actor, { through: 'models.Character' });
      Movie.belongsToMany(models.user, {through:'models.Review'})
    }
  };
  Movie.init({
    img_url_backdrop: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "backdrop image must be filled ."
        },
        isUrl:{
          msg: "must be in url format"
        }
      }
    },
    img_url_poster: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "poster image must be filled ."
        },
        isUrl:{
          msg: "must be in url format"
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "Title must be filled ."
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "genre image must be filled ."
        },
      }
    },
    date_data_in: {
      type: DataTypes.DATE,
      validate:{
        notEmpty : {
          msg : "date must be filled ."
        }
      }
    },
    release_date: {
      type: DataTypes.DATE,
      validate : {
        notEmpty : {
          msg : "release date must be filled ."
        }
      }
    },
    synopsis:{
      type: DataTypes.TEXT,
      validate: {
        notEmpty : {
          msg : "synopsis must be filled ."
        }
      }
    }, 
    director: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "director must be filled ."
        }
      }
    },
    budget: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty : {
          msg : "budget must be filled ."
        }
      }
    },
    trailer_url: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "poster image must be filled ."
        },
        isUrl:{
          msg: "must be in url format"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  sequelizePaginate.paginate(Movie)
  return Movie;
};