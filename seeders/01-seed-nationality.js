"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "nationalities",
         [
            {
               nation: "Española",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Mexicana",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Colombiana",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Argentina",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Ecuatoriana",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Venezolana",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Uruguaya",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Italiana",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Rusa",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nation: "Cubana",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("nationalities", {
         [Op.or]: [
            { nation: "Española" },
            { nation: "Mexicana" },
            { nation: "Colombiana" },
            { nation: "Argentina" },
            { nation: "Ecuatoriana" },
            { nation: "Venezolana" },
            { nation: "Uruguaya" },
            { nation: "Italiana" },
            { nation: "Rusa" },
            { nation: "Cubana" },
         ],
      });
   },
};
