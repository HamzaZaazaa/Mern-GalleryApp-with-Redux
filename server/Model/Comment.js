const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
  userId: {
    // Which user is commenting
    type: Schema.Types.ObjectId,
    ref: "userSchema",
  },
  posterId: {
    // Which post user commented on
    type: Schema.Types.ObjectId,
    ref: "posterSchema",
  },
});
// Collection comment(s) exported...
module.exports = Schema = mongoose.model("comment", commentSchema);
