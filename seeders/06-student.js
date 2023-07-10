"use strict";
const { sample } = require("lodash");
const { maxSeed } = require("../config/global");

// ----------------------------------------------------------------------

const maxStudents = maxSeed.USER;
const totalNationalities = maxSeed.NATIONALITY;
const totalAddresses = maxSeed.ADDRESS;

const nationalityIds = [...Array(totalNationalities).keys()].slice(1);
const addressIds = [...Array(totalAddresses).keys()].slice(1);

const students = [...Array(maxStudents)].map((_, index) => ({
   active: sample(["yes", "no"]),
   id_nationality: sample(nationalityIds),
   id_address: sample(addressIds),
   id_user: index + 2,
   updatedAt: new Date(),
   createdAt: new Date(),
}));

// ----------------------------------------------------------------------

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("students", students, {});
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("students", {});
   },
};
