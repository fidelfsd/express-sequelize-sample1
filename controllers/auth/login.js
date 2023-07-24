const bcrypt = require("bcrypt");
const { generateToken } = require("../../_utils/token");
const { errorMsg, successMsg } = require("../../_utils/messages");

const { Role, User, Student } = require("../../models");

// ----------------------------------------------------------------------

/**
 * Login user
 * Url example: [POST] http://localhost:3000/auth/login
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(400).json({
         status: "Error",
         message: errorMsg.authentication.REQUIERED,
      });
   }

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
            message: errorMsg.authentication.BADCREDENTIALS,
         });
      }

      // get student id, doctor id
      const userRole = user.role.name;
      let student;
      let doctor;
      if (userRole === "student") {
         student = await user.getStudent();
      } else if (userRole === "doctor") {
         doctor = await user.getDoctor();
      }

      //console.log({ student: student.id, user: user.id });

      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
         return res.status(400).json({
            status: "Error",
            message: errorMsg.authentication.BADCREDENTIALS,
         });
      }

      const token = generateToken({
         userId: user.id,
         userName: user.name,
         userRole: user.role.name,
         roleId: user.id_role,
         studentId: student?.id,
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
         message: errorMsg.authentication.LOGINFAILED,
         error: error?.message,
      });
   }
};
