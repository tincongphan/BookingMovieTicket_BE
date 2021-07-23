'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let listShowtimes = [];
    for (let index = 1; index < 100; index++) {
      const showtime = {
        id: index,
        timeStart: "12:05:05",
        cinemaId: index,
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listShowtimes.push(showtime)
    }
    await queryInterface.bulkInsert(
      'Showtimes',
      listShowtimes
      ,
      {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Showtimes', null, {})
  }
};
