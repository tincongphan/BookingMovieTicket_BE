'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let listTickets = [];
    for (let index = 1; index < 100; index++) {
      const ticket = {
        id: index,
        userId: index,
        movieId: index,
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listTickets.push(ticket)
    }
    await queryInterface.bulkInsert(
      'Tickets',
      listTickets
      ,
      {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Tickets', null, {})
  }
};
