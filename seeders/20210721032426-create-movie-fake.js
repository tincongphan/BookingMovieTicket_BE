'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    let listMovies = [];
    for (let index = 1; index < 100; index++) {
      const movie = {
        id: index,
        name: `muahoano${index}`,
        startDate:"2021-02-05 12:05:05",
        time:60,
        evaluate:"9",
        poster:"funning film",
        trailer:"youtube.com.hd",
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listMovies.push(movie)
    }
    await queryInterface.bulkInsert(
      'Movies',
      listMovies
      ,
      {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {})
   
  }
};
