const express = require("express");
const adminroute = express.Router();
const userAuth = require("../Middlewares/userAuth");
const Comment = require("../Model/Comment");
const Poster = require("../Model/Poster");
const User = require("../Model/User");
// Get all posts
adminroute.get("/adminpost", async (req, res) => {
  try {
    const getall = await Poster.find();
    res.status(200).send(getall);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// get all users
adminroute.get("/allusers", async (req, res) => {
  try {
    const allusers = await User.find();
    res.status(200).send(allusers);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// delete posts
adminroute.delete("/admindel/:id", userAuth, async (req, res) => {
  const { id } = req.params;
  try {
    await Poster.findByIdAndDelete(id);
    res.status(200).send("Post Deleted");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// Delete everything a user has
adminroute.delete("/admindelete/:id", userAuth, async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    await Poster.deleteMany({ userId: id });
    await Comment.deleteMany({ userId: id });
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = adminroute;
