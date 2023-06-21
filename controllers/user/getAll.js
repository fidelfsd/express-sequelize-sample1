const { User } = require("../../models");

module.exports = async (req, res) => {
   try {
      const users = await User.findAll();
      res.status(200).json(users);
   } catch (error) {
      res.status(500).json({
         status: "error",
         message: error.message,
      });
   }
};
