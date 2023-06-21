"use strict";
const bcrypt = require("bcrypt");

const password = "12345678";
const encryptedPassword = bcrypt.hashSync(password, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "users",
         [
            {
               user_name: "Admon",
               user_last_name: "Json",
               birthday: "1996-05-01",
               email: "admin@admin.com",
               password: encryptedPassword,
               id_role: 1, // admin
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Jose",
               user_last_name: "Palacios",
               birthday: "1996-05-01",
               email: "jose@palacios.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Marta",
               user_last_name: "García",
               birthday: "2002-09-10",
               email: "marta@garcia.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Ernesto",
               user_last_name: "Pérez",
               birthday: "1966-07-23",
               email: "ernest@perez.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Vicente",
               user_last_name: "Ruiz",
               birthday: "1987-12-31",
               email: "vicente@ruiz.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Enrrique",
               user_last_name: "Cervantes",
               birthday: "1974-01-15",
               email: "laura@laura.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Terry",
               user_last_name: "Medhurst",
               birthday: "2000-12-25",
               email: "terry@medhusrst.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Sheldon",
               user_last_name: "Quigley",
               birthday: "2003-08-02",
               email: "sheldon@quigley.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Terrill",
               user_last_name: "Hills",
               birthday: "1992-12-30",
               email: "terrill@hills.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
            {
               user_name: "Miles",
               user_last_name: "Cummerata",
               birthday: "1969-01-16",
               email: "miles@cummerata.com",
               password: encryptedPassword,
               id_role: 2,
               updatedAt: new Date(),
               createdAt: new Date(),
            },
         ],
         {}
      );
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
