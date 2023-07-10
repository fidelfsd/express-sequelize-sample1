"use strict";

const { faker } = require("@faker-js/faker");
const { maxSeed } = require("../config/global");

// ----------------------------------------------------------------------

const maxNationalities = maxSeed.NATIONALITY;

let nationalities = [...Array(maxNationalities)].map((_, index) => ({
   nation: faker.location.country(),
   createdAt: new Date(),
   updatedAt: new Date(),
}));

// ----------------------------------------------------------------------

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("nationalities", nationalities, {});
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("nationalities", {});
   },
};
