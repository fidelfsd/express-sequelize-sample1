const { forIn } = require("lodash");
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
      let courses = [];
      let category;
      if (student) {
         studentNationality = await student.getNationality();
         studentAddress = await student.getAddress();
         courses = await student.getCourses();
      }

      const coursesWithcategory = [];
      for (const course of courses) {
         category = await course.getCategory();
         coursesWithcategory.push({
            id: course.id,
            name: course.course_name,
            category: category.category,
         });
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
         courses:
            coursesWithcategory.length > 0 ? coursesWithcategory : undefined,
      });
   } catch (error) {
      res.status(500).json({
         status: "error",
         message: errorMsg.user.GETONE,
      });
   }
};
