
'use strict';
const {encryptPwd} = require('../helpers/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    

     static associate(models) {
      // define association here
      // user.hasMany(models.watchlist);
      user.belongsToMany(models.Movie, {through:'models.Review'})

    }
  };
  user.init({
    full_name: DataTypes.STRING,
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Username tidak boleh kosong."
        }
      }
    },
    roles: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING, 
      validate : {
        isEmail : {
          msg: "not an email format"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Password tidak boleh kosong."
        }
      }
    },
    user_img: DataTypes.STRING,
    watchlist: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate(user){
        user.password = encryptPwd(user.password)
        user.roles = 'user'
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};
