const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers.js");
const auth = require("../auth.js");

router.post("/signup", userControllers.signUp);

router.post("/checkUsername", userControllers.checkUsernameAvailability);

router.post("/login", userControllers.logIn);

router.get("/getUsers", userControllers.getAllUsers);

module.exports = router;