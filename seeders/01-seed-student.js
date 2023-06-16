"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "students",
         [
            {
               user_name: "Jose",
               user_last_name: "Palacios",
               birthday: "1996-05-01",
               active: "yes",
               id_nationality: 1,
               id_address: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },

            {
               user_name: "Marta",
               user_last_name: "Garcia",
               birthday: "1996-05-01",
               active: "yes",
               id_nationality: 3,
               id_address: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },

            {
               user_name: "Ernesto",
               user_last_name: "Perez",
               birthday: "1996-05-01",
               active: "yes",
               id_nationality: 2,
               id_address: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },

            {
               user_name: "Vicente",
               user_last_name: "Ruiz",
               birthday: "1996-05-01",
               active: "yes",
               id_nationality: 2,
               id_address: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },

            {
               user_name: "Enrique",
               user_last_name: "Garcia",
               birthday: "1996-05-01",
               active: "yes",
               id_nationality: 3,
               id_address: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
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
