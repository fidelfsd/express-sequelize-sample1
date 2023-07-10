const { errorMsg, successMsg } = require("../../_utils/messages");
const { role } = require("../../config/global");
const { User, Student } = require("../../models");

// ----------------------------------------------------------------------

module.exports = async (req, res) => {
   const { userId, userRole, roleId } = req; // get user id from token

   try {
      // user update

      const updatedResult = await User.update(
         {
            ...req.body,
            password: req.body.password ? hash(req.body.password) : undefined,
            id_role: roleId, // to avoid update id_role
         },
         {
            where: { id: userId },
         }
      );

      // send error response if user not found

      if (updatedResult == 0) {
         return res.status(400).json({
            status: "error",
            message: errorMsg.user.NOTFOUND,
         });
      }

      // student update

      if (userRole == role.STUDENT.NAME) {
         await Student.update(
            {
               ...req.body,
               id_user: userId,
            },
            {
               where: { id_user: userId },
            }
         );
      }

      // send success response

      res.status(200).json({
         message: successMsg.user.UPDATE,
      });
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: errorMsg.user.UPDATE,
         error: error?.message,
      });
   }
};
