const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signUp = async (req, res, next) => {
  const newUser = await User.create({
    firstName: req.body.fname,
    lastName: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passConfirm,
  });

  res.status(201).json({
    status: "Success",
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("No Email or Password entered");
    next();
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return console.log("Incorrect Password");
  }

  console.log("Correct Password");
};
