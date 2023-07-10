"use strict";
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const { maxSeed } = require("../config/global");

// ----------------------------------------------------------------------

const maxUsers = maxSeed.USER;
const plainPassword = "12345678";

const adminUser = {
   name: "Admon",
   last_name: "Json",
   birthday: "1996-05-01",
   email: "admin@admin.com",
   password: bcrypt.hashSync(plainPassword, 10),
   id_role: 1, // admin
   updatedAt: new Date(),
   createdAt: new Date(),
};

let users = [...Array(maxUsers)].map((_, index) => ({
   name: faker.person.firstName(),
   last_name: faker.person.lastName(),
   birthday: faker.date.birthdate(),
   email: faker.internet.email(),
   password: bcrypt.hashSync(plainPassword, 10),
   id_role: 2,
   updatedAt: new Date(),
   createdAt: new Date(),
}));

users = [adminUser, ...users];

// ----------------------------------------------------------------------

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("users", users, {});
   },
   async down(queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
   },
};
