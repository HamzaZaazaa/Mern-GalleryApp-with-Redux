const mongoose = require("mongoose");

// types of documents in the collection
const userSchema = new mongoose.Schema({
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
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "poster" }],
  Comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
  },
  // roles need managment to build the admin back office
  Role: ["User", "Admin"],
});
// Collection user(s) exported...
module.exports = Schema = mongoose.model("user", userSchema);
