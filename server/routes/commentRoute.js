const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const commentroute = express.Router();
const Comment = require(".././Model/Comment");

commentroute.post("/addcomment", async (req, res) => {
  // comment from front
  let { usercomment } = req.body;
  try {
    // adding new comment
    let comment = await new Comment({ usercomment });
    // saving comment to database
    await comment.save();
    // response status (200 ok)
    res.status(200).send("comment added successfully", comment);
  } catch (error) {
    // respone status (500 server error)
    res.status(500).send(error);
  }
});
module.exports = commentroute;
