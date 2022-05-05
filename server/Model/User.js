const mongoose = require("mongoose");

// types of documents in the collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    Unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// Collection user(s) exported...
module.exports = Schema = mongoose.model("user", userSchema);
