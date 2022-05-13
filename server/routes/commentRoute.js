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
    // saving comment to database
    await comment.save();
    // response status (200 ok)
    res.status(200).send("comment added successfully");
  } catch (error) {
    // respone status (500 server error)
    res.status(500).send("Server Error");
  }
});
module.exports = commentroute;
