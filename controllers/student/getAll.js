const { User, Student, Nationality, Address } = require("../../models");
const { errorMsg } = require("../../_utils/messages");
const { pagination } = require("../../config/global");

// ----------------------------------------------------------------------

/**
 * Login user
 * Url example: [POST] http://localhost:3000/auth/login
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
   let { page } = req.query;

   page = +page;
   if (!page || page < 0) page = 1;

   const LIMIT = pagination.LIMIT;
   const studentCount = await Student.count();
   const maxPages = Math.ceil(studentCount / LIMIT);

   if (page > maxPages) {
      return res.status(404).json({
         status: "Error",
         message: errorMsg.pagination.SURPASS,
      });
   }

   try {
      const result = await Student.findAll({
         limit: LIMIT,
         offset: (page - 1) * LIMIT,
         attributes: {
            exclude: [
               "id_nationality",
               "id_address",
               "id_user",
               "createdAt",
               "updatedAt",
            ],
         },
         include: [
            {
               model: User,
               as: "user",
               attributes: ["name", "last_name", "email", "birthday"],
            },
            {
               model: Nationality,
               as: "nationality",
               attributes: { exclude: ["id", "createdAt", "updatedAt"] },
            },
            {
               model: Address,
               as: "address",
               attributes: { exclude: ["id", "createdAt", "updatedAt"] },
            },
         ],
      });

      const students = result.map((student) => {
         return {
            id: student.id,
            name: student.user.name,
            last_name: student.user.last_name,
            email: student.user.email,
            birthday: student.user.birthday,
            nationality: student.nationality.nation,
            address: student.address,
         };
      });

      res.status(200).json({
         info: {
            count: studentCount,
            page,
            pages: maxPages,
         },
         results: students,
      });
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: errorMsg.user.GETALL,
         error: error,
      });
   }
};
