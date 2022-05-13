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
  Comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  // User Profile Picture fieldname
  postTitle: String,
});
// Collection user(s) exported...
module.exports = Schema = mongoose.model("user", userSchema);
