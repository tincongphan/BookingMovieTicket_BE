'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate({ Ticket }) {
      // define association here
      this.hasMany(Ticket, { foreignKey: "userId" })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};