"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Address extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // Address {1}--{1..n} Student
         Address.hasMany(models.Student, {
            as: "student",
            foreignKey: "id_address", // foreingnKey en el modelo Student
         });
      }
   }
   Address.init(
      {
         street: DataTypes.STRING,
         num: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "Address",
         tableName: "addresses",
      }
   );
   return Address;
};
