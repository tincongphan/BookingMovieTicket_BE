'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {

    static associate({ Showtime }) {
      // define association here
      this.belongsTo(Showtime, { foreignKey: "showtimeId" })
    }
  };
  Seat.init({
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    showtimeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};