"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Nationality extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // Nationality {1}--{0..n} Student
         Nationality.hasMany(models.Student, {
            as: "student",
            foreignKey: "id_nationality", // foreingnKey en el modelo Student
         });
      }
   }
   Nationality.init(
      {
         nation: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Nationality",
         tableName: "nationalities",
      }
   );
   return Nationality;
};
