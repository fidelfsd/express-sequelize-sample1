const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");
const router = express.Router();

// get users
router.get("/", verifyToken, isAdmin, userController.getAll);

// get user profile
router.get("/profile", verifyToken, userController.getProfile);

// get user profile
router.put("/profile", verifyToken, userController.updateProfile);

module.exports = router;
