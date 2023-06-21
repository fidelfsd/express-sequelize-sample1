"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "students",
         [
            {
               active: "yes",
               id_nationality: 1,
               id_address: 1,
               id_user: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               active: "yes",
               id_nationality: 3,
               id_address: 2,
               id_user: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               active: "yes",
               id_nationality: 2,
               id_address: 3,
               id_user: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               active: "yes",
               id_nationality: 4,
               id_address: 4,
               id_user: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               active: "no",
               id_nationality: 6,
               id_address: 5,
               id_user: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               active: "no",
               id_nationality: 4,
               id_address: 1,
               id_user: 7,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               active: "yes",
               id_nationality: 4,
               id_address: 2,
               id_user: 8,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               active: "yes",
               id_nationality: 3,
               id_address: 3,
               id_user: 9,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               active: "no",
               id_nationality: 6,
               id_address: 4,
               id_user: 10,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("students", {
         [Op.or]: [
            { nombre: "Jose" },
            { nombre: "Marta" },
            { nombre: "Ernesto" },
            { nombre: "Vicente" },
            { nombre: "Enrrique" },
            { nombre: "Terry" },
            { nombre: "Sheldon" },
            { nombre: "Terrill" },
            { nombre: "Miles" },
            { nombre: "Mavis" },
            { nombre: "Alison" },
            { nombre: "Oleta" },
            { nombre: "Ewell" },
         ],
      });
   },
};
