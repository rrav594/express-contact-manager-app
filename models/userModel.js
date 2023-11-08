const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: [true, "Please provide user name."] },
    email: {
      type: String,
      required: [true, "Please provide user email address."],
      unique: [true, "Email already taken."],
    },
    password: {
      type: String,
      required: [true, "Please add a user password."],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
