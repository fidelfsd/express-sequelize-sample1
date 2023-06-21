const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middelwares/verifyToken");
const router = express.Router();

/* GET users listing. */
router.get("/", verifyToken, userController.getAll);

module.exports = router;
