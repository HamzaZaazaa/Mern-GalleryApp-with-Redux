const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  usercomment: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  user:
    // buidling relation with userSchema
    [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  poster: {
    // building relation with posterSchema
    type: mongoose.Schema.Types.ObjectId,
    ref: "poster",
  },
});
// Collection comment(s) exported...
module.exports = Schema = mongoose.model("comment", commentSchema);
