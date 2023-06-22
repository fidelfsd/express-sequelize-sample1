const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Role, User, Student } = require("../../models");

/**
 * Login user
 * Url example: [POST] http://localhost:3000/auth/login
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await User.findOne({
         where: {
            email: email,
         },
         include: [{ model: Role, as: "role" }],
      });

      if (!user) {
         return res.status(400).json({
            status: "Error",
            message: "These credentials do not match our records",
         });
      }

      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
         return res.status(400).json({
            status: "Error",
            message: "These credentials do not match our records",
         });
      }

      const payload = {
         userId: user.id,
         userName: user.user_name,
         userRole: user.role.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
         expiresIn: "1h",
      });

      // const student = await Student.findOne({
      //    where: {
      //       id_user: user.id,
      //    },
      // });

      // const courses = await student.getCourses();
      // console.log(courses.length);

      res.status(200).json({
         token,
      });
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: error.message,
      });
   }
};
