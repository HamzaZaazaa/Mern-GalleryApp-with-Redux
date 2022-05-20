const mongoose = require("mongoose");

const posterSchema = new mongoose.Schema(
  {
    posterTitle: {
      type: String,
      required: true,
    },
    // The picture fieldname goes here
    post: {
      type: String,
      required: true,
    },
    // Relation with User Schema
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);
// Collection poster(s) exported...
module.exports = Schema = mongoose.model("poster", posterSchema);
