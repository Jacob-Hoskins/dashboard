const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/createAccount", authController.signUp);
router.get("/signup", userController.createAccountPage);
router.get("/login", userController.loginPage);
router.post("/check", authController.login);

module.exports = router;
