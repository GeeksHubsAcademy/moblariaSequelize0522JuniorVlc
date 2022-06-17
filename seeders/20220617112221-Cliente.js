'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  
    await queryInterface.bulkInsert('Clientes', [
      {
        name: 'Paco el Farola',
        dni: "25874193F",
        rol: "admin",
        password: "1234",
        createdAt: "2021-06-21 06:19:53",
        updatedAt: "2021-06-06 07:27:58"
      },
      {
        name: 'Francisco Felicidad',
        dni: "98765412F",
        rol: "",
        password: "1234",
        createdAt: "2021-06-21 06:19:53",
        updatedAt: "2021-06-06 07:27:58"
      }

     ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
