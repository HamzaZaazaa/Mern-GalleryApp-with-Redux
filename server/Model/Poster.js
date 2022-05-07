const mongoose = require("mongoose");

const posterSchema = new mongoose.Schema({
  PosterTitle: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
// Collection poster(s) exported...
module.exports = Schema = mongoose.model("poster", posterSchema);
