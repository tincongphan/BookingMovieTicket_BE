'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let listShowtimes = [];
    for (let index = 1; index < 100; index++) {
      const showtime = {
        id: index,
        name: `A${index}`,
        status: false,
        price: `${index}0000`,
        type: "normal",
        showtimeId: index,
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listShowtimes.push(showtime)
    }
    await queryInterface.bulkInsert(
      'Seats',
      listShowtimes
      ,
      {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Seats', null, {})

  }
};
