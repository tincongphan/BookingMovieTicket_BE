'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let listCinema_Movie = [];
    for (let index = 1; index < 100; index++) {
      const cinema_movie = {
        id: index,
        cinemaId: index,
        movieId: index,
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listCinema_Movie.push(cinema_movie)
    }
    await queryInterface.bulkInsert(
      'Cinema_Movies',
      listCinema_Movie
      ,
      {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cinema_Movies', null, {})
  }
};
