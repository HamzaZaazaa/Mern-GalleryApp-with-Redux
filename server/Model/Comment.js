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
  },
  {
    timestamps: true,
  }
);

// Collection comment(s) exported...
module.exports = Schema = mongoose.model("comment", commentSchema);
