'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {

    static associate({ Cinema, Seat }) {
      // define association here
      this.belongsTo(Cinema, { foreignKey: "cimemaId" })
      this.hasMany(Seat, { foreignKey: "showtimeId" })
    }
  };
  Showtime.init({
    timeStart: DataTypes.DATE,
    cinemaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Showtime',
  });
  return Showtime;
};