'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {

    static associate({ Ticket, Cinema_Movie }) {
      // define association here
      this.hasMany(Ticket, { foreignKey: "movieId" })
      this.hasMany(Cinema_Movie, { foreignKey: "movieId" })
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    time: DataTypes.INTEGER,
    evaluate: DataTypes.INTEGER,
    poster: DataTypes.STRING,
    trailer: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};