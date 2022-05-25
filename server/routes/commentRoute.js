const express = require("express");
const commentroute = express.Router();
const Comment = require(".././Model/Comment");
const userAuth = require("../Middlewares/userAuth");

// Add new comment
commentroute.post("/addcomment/:id", userAuth, async (req, res) => {
  let { id } = req.params;
  try {
    const comment = new Comment({
      usercomment: req.body.comment,
      userId: req.user.id,
      postId: id,
    });
    await comment.save();
    res.status(200).send("comment added successfully");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// get comments with post id
commentroute.get("/getcomments/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const comments = await Comment.find({ postId: id }).populate("userId", [
      "name",
      "lastname",
    ]);
    return res.status(200).send({ Found: comments });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// Delete comment
commentroute.delete("/deletecomment/:id", userAuth, async (req, res) => {
  let { id } = req.params;
  try {
    await Comment.findByIdAndDelete(id);
    res.status(200).send("comment deleted");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// Edit comment
commentroute.put("/editcomment/:id", userAuth, async (req, res) => {
  let { id } = req.params;
  try {
    await Comment.findByIdAndUpdate(id, {
      $set: { usercomment: req.body.usercomment },
    });
    res.status(200).send("Comment updated");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
module.exports = commentroute;
