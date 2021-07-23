'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {

    static associate({ Movie, User }) {
      // define association here
      this.belongsTo(Movie, { foreignKey: "movieId" })
      this.belongsTo(User, { foreignKey: "userId" })
    }
  };
  Ticket.init({
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};