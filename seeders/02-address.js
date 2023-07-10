"use strict";

const { faker } = require("@faker-js/faker");
const { maxSeed } = require("../config/global");

// ----------------------------------------------------------------------

const maxAddresses = maxSeed.ADDRESS;

let addresses = [...Array(maxAddresses)].map((_, index) => ({
   street: faker.location.street(),
   num: faker.number.int({ min: 1, max: 1000 }),
   createdAt: new Date(),
   updatedAt: new Date(),
}));

// ----------------------------------------------------------------------

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("addresses", addresses, {});
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("addresses", {});
   },
};
