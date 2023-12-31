const bcrypt = require("bcrypt");
const { Student, User } = require("../../models");
const { successMsg, errorMsg } = require("../../_utils/messages");
const { role } = require("../../config/global");

// ----------------------------------------------------------------------

/**
 * Create new user
 * Url example: [POST] http://localhost:3000/auth/register
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
   const { user_name, user_last_name, email, password, birthday } = req.body;

   if (password.lenght < 8) {
      return res.status(400).json({
         status: "Error",
         message: errorMsg.user.PASSWORDLEN,
      });
   }

   try {
      const hash = bcrypt.hashSync(password, 10);

      const newUser = {
         user_name,
         user_last_name,
         email,
         password: hash,
         birthday,
         id_role: role.STUDENT.ID,
      };

      const user = await User.create(newUser);

      const newStudent = {
         id_user: user.id,
      };

      const student = await Student.create(newStudent);
      //await student.addCourse(2); //metodo generado por sequelize a partir del modelo Course (N:N con Student)
      //await student.save();

      res.status(201).json({
         message: successMsg.user.CREATE,
      });
   } catch (error) {
      console.log(error.name);

      const statusCode =
         error.name == "SequelizeUniqueConstraintError" ||
         error.name == "SequelizeValidationError"
            ? 400
            : 500;

      res.status(statusCode).json({
         status: "Error",
         message: errorMsg.user.CREATE,
         error: error?.message,
      });
   }
};
