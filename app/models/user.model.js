const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    isVerified: { type: Boolean, default: false },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
