const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    usercomment: {
      type: String,
      required: true,
    },
    userId:
      // relation with userSchema
      { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    // relation with posterSchema
    posterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "poster",
    },
  },
  {
    timestamps: true,
  }
);

// Collection comment(s) exported...
module.exports = Schema = mongoose.model("comment", commentSchema);
