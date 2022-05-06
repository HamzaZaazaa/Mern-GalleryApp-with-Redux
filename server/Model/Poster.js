const mongoose = require("mongoose");

const posterSchema = new mongoose.Schema({
  PosterTitle: {
    type: String,
    required: true,
  },
  userId: {
    // userid from UserSchema id...
    type: Schema.Types.ObjectId,
    ref: "userSchema",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});
// Collection poster(s) exported...
module.exports = Schema = mongoose.model("poster", posterSchema);
