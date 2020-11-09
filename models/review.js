'use strict';
const sequelizePaginate = require('sequelize-paginate')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Movie)
      Review.belongsTo(models.user)
    }
  };
  Review.init({
    user_rating: {
      type : DataTypes.DOUBLE,
      validate: {
        notEmpty : {
          msg: "Rating must be filled"
        },
        min:1,
        max:10
      }
    },
    comment: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : {
          msg: "Rating must be filled"
        }
      }
    },
    date_of_comment: new Date(),
    share: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty : {
          msg: "Share must be filled"
        }
      }
    },
    MovieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  sequelizePaginate.paginate(Review)
  return Review;
};