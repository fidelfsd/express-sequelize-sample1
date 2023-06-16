const { Student } = require("../models");

const studentController = {};

studentController.getAll = async (req, res) => {
   try {
      const students = await Student.findAll();
      res.status(200).json(students);
   } catch (error) {
      res.status(500).json({
         status: "Error",
         message: error.message,
      });
   }
};

module.exports = studentController;
