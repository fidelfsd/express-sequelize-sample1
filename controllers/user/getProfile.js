const { errorMsg } = require("../../_utils/messages");
const { User } = require("../../models");

// ----------------------------------------------------------------------

module.exports = async (req, res) => {
   const id = req.userId; // get user id from token

   try {
      const user = await User.findOne({
         where: { id: id },
      });

      const student = await user.getStudent();
      let studentNationality;
      let studentAddress;
      if (student) {
         studentNationality = await student.getNationality();
         studentAddress = await student.getAddress();
      }

      res.status(200).json({
         // default ------------
         name: user.name,
         last_name: user.last_name,
         email: user.email,
         birthday: user.birthday,
         // student ------------
         active: student?.active,
         nationality: studentNationality?.nation,
         address: studentAddress
            ? {
                 street: studentAddress.street,
                 number: studentAddress.num,
              }
            : undefined,
      });
   } catch (error) {
      res.status(500).json({
         status: "error",
         message: errorMsg.user.GETONE,
      });
   }
};
