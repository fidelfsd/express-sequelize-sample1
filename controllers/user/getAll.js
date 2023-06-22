const { User, Student, Role } = require("../../models");

const models = require("../../models/index");

console.log(models.sequelize.models);

module.exports = async (req, res) => {
   try {
      const users = await User.findAll({
         //attributes: { exclude: ["password", "createdAt", "updatedAt"] },
         attributes: [
            "id",
            ["user_name", "name"],
            ["user_last_name", "last_name"],
         ],
         include: [
            {
               model: Role,
               as: "role",
               attributes: { exclude: ["createdAt", "updatedAt"] },
            },
            {
               model: Student,
               as: "student",
               attributes: { exclude: ["createdAt", "updatedAt"] },
            },
         ],
      });
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({
         status: "error",
         message: error.message,
      });
   }
};
