const express = require("express");
const commentroute = express.Router();
const Comment = require(".././Model/Comment");
const userAuth = require("../Middlewares/userAuth");

commentroute.post("/addcomment", userAuth, async (req, res) => {
  try {
    const comment = new Comment({
      usercomment: req.body.usercomment,
      userId: req.user.id,
    });
    await comment.save();
    res.status(200).send("comment added successfully");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
module.exports = commentroute;
