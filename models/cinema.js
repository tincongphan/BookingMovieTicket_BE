'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
   
    static associate({ Cineplex, Cinema_Movie, Showtime }) {
      // define association here
      this.belongsTo(Cineplex, {foreignKey:"cineplexId"})
      this.hasMany(Cinema_Movie, { foreignKey: "cinemaId" })
      this.hasMany(Showtime, { foreignKey: "cinemaId" })
    }
  };
  Cinema.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    cineplexId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cinema',
  });
  return Cinema;
};