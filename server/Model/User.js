const mongoose = require("mongoose");
const Poster = require("./Poster");

// types of documents in the collection
const userSchema = new mongoose.Schema(
  {
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
    // User Profile Picture fieldname
    postTitle: String,
    // Relation with Gallery Schema
    // Array for many posts
    userposts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "poster",
      },
    ],
    // Relatin with Comment Schema
    // Array for many comments
    usercomments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);
// Collection user(s) exported...
module.exports = Schema = mongoose.model("user", userSchema);
