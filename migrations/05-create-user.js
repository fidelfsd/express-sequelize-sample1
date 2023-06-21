"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("users", {
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
            allowNull: false,
            type: Sequelize.STRING,
         },
         birthday: {
            type: Sequelize.DATE,
         },
         email: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING,
         },
         password: {
            allowNull: false,
            type: Sequelize.STRING,
         },
         id_role: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: "roles",
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
      await queryInterface.dropTable("users");
   },
};
