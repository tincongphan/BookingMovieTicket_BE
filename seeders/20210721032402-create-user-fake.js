'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let listUser = [];
    for (let index = 1; index < 100; index++) {
      const user = {
        id: index,
        name: `nguyen ${index}`,
        email: `nguyen${index}@gmail.com`,
        password: `nguyen ${index}`,
        phone: `${index}${index}${index}`,
        role: "admin",
        avatar: "abc.jpg",
        createdAt: "2021-02-05 12:05:05",
        updatedAt: "2021-02-05 12:05:05"
      }
      listUser.push(user)
    }
    await queryInterface.bulkInsert(
      'Users',
      listUser
      ,
      {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
