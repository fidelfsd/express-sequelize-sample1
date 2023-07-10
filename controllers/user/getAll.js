const { errorMsg } = require("../../_utils/messages");
const { pagination } = require("../../config/global");
const { User, Student, Role } = require("../../models");

// ----------------------------------------------------------------------

module.exports = async (req, res) => {
   let { page } = req.query;

   page = +page;
   if (!page || page < 0) page = 1;

   const LIMIT = pagination.LIMIT;
   const userCount = await User.count();
   const maxPages = Math.ceil(userCount / LIMIT);

   if (page > maxPages) {
      return res.status(404).json({
         status: "Error",
         message: errorMsg.pagination.SURPASS,
      });
   }

   try {
      const users = await User.findAll({
         limit: LIMIT,
         offset: (page - 1) * LIMIT,
         attributes: ["id", "name", "last_name", "email"],
         include: [
            {
               model: Role,
               as: "role",
               attributes: { exclude: ["id", "createdAt", "updatedAt"] },
            },
            {
               model: Student,
               as: "student",
               attributes: { exclude: ["createdAt", "updatedAt"] },
            },
         ],
      });
      res.status(200).json({
         info: {
            count: userCount,
            page,
            pages: maxPages,
         },
         results: users,
      });
   } catch (error) {
      res.status(500).json({
         status: "error",
         message: errorMsg.user.GETALL,
         error: error?.message,
      });
   }
};
