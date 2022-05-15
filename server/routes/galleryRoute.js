const express = require("express");
const upload = require("../Middlewares/upload");
const router = express.Router();
const userAuth = require("../Middlewares/userAuth");
const Poster = require("../Model/Poster");

// Post a picture in gallery
router.post("/gallery", userAuth, upload.single("myPost"), async (req, res) => {
  try {
    const poster = new Poster({
      posterTitle: req.body.posterTitle,
      userId: req.user.id,
      post: req.file.filename,
    });
    await poster.save();
    res.status(200).send("Poster added to gallery");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// find the post along with the user collection
router.get("/getall", userAuth, async (req, res) => {
  try {
    const findposts = await Poster.find().populate("userId", [
      "name",
      "lastname",
    ]);
    res.status(200).send(findposts);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
module.exports = router;
