"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("students", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         active: {
            type: Sequelize.ENUM("yes", "no"),
         },
         id_nationality: {
            type: Sequelize.INTEGER,
            references: {
               model: "nationalities",
               key: "id",
            },
         },
         id_address: {
            type: Sequelize.INTEGER,
            references: {
               model: "addresses",
               key: "id",
            },
         },
         id_user: {
            type: Sequelize.INTEGER,
            references: {
               model: "users",
               key: "id",
            },
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("students");
   },
};
