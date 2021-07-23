'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let listCinemas = [];
    for (let index = 1; index < 100; index++) {
      const cinema = {
        id: index,
        name: "BHD 3/2",
        address: `3/2 10 district, hcm city.`,
        image: "BHD3/2.jpg",
        cineplexId: index,
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listCinemas.push(cinema)
    }
    await queryInterface.bulkInsert(
      'Cinemas',
      listCinemas
      ,
      {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Cinemas', null, {})
  }
};
