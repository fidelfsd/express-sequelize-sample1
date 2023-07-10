const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/students");
const authRouter = require("./routes/auth");

// home page
router.use("/", indexRouter);

// users
router.use("/api/user", usersRouter);

// students
router.use("/api/student", studentsRouter);

// authentication
router.use("/auth", authRouter);

module.exports = router;
