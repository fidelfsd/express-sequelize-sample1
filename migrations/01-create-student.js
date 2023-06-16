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
         user_name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         user_last_name: {
            type: Sequelize.STRING,
         },
         birthday: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         active: {
            type: Sequelize.ENUM("yes", "no"),
         },
         id_nationality: {
            type: Sequelize.INTEGER,
         },
         id_address: {
            type: Sequelize.INTEGER,
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
