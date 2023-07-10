const express = require("express");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");
const studentController = require("../controllers/student");
const router = express.Router();

// get all students
router.get("/", verifyToken, isAdmin, studentController.getAll);

module.exports = router;
