const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  isSelf: {
    type: Boolean,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
