'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    let listCineplexes = [];
    for (let index = 1; index < 100; index++) {
      const cineplex = {
        id: index,
        name:"BHD",
        logo:"BHD.jpg",
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listCineplexes.push(cineplex)
    }
    await queryInterface.bulkInsert(
      'Cineplexes',
      listCineplexes
      ,
      {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Cineplexes', null, {})
  }
};
