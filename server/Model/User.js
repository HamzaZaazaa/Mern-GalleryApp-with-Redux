const mongoose = require("mongoose");

// types of documents in the collection
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      Unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    // User Profile Picture fieldname
    postTitle: String,
  },
  {
    timestamps: true,
  }
);
// Collection user(s) exported...
module.exports = Schema = mongoose.model("user", userSchema);
