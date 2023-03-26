const crypto = require("node:crypto");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    required: [true, "A user must have a first name"],
    type: String,
  },

  lastName: {
    required: [true, "A user must have a last name"],
    type: String,
  },

  email: {
    required: [true, "A user must have a email"],
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: [true, "A user must have a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "passwords must match"],
    validate: {
      //ONLY WORKS ON CREATE & SAVE
      validator: function (el) {
        return el === this.password;
      },
    },
  },
});

//Encrypts users password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
});

//decrypts and checks password
userSchema.methods.correctPassword = async function (
  canidatePassword,
  userPassword
) {
  return await bcrypt.compare(canidatePassword, userPassword);
};

const User = mongoose.model("Users", userSchema);

module.exports = User;
