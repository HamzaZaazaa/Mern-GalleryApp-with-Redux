const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    usercomment: {
      type: String,
      required: true,
    },
    userId:
      // buidling relation with userSchema
      { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    posterId: {
      // building relation with posterSchema
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
