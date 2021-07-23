'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cinema_Movie extends Model {

    static associate({ Cinema, Movie }) {
      // define association here
      this.belongsTo(Cinema, { foreignKey: "cinemaId" })
      this.belongsTo(Movie, { foreignKey: "movieId" })
    }
  };
  Cinema_Movie.init({
    cinemaId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cinema_Movie',
  });
  return Cinema_Movie;
};