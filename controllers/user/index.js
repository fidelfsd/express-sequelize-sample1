const userController = {};

userController.getAll = require("./getAll");
userController.getProfile = require("./getProfile");
userController.updateProfile = require("./updateProfile");

module.exports = userController;
