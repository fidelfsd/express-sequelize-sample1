const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");

/* GET users listing. */
router.get("/", studentController.getAll);

module.exports = router;
