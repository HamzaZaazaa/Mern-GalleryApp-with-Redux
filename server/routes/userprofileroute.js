const express = require("express");
const req = require("express/lib/request");
const upload = require("../Middlewares/upload");
const router = express.Router();
const userAuth = require("../Middlewares/userAuth");
const Poster = require("../Model/Poster");
const User = require("../Model/User");

// userAuth middleware is giving an error
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

// user profile picture
router.put("/upload", userAuth, upload.single("myPic"), async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $set: { postTitle: req.file.filename },
    });
    res.send("image uploaded");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// GET POST WITH USER ID
router.get("/getwithid/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const post = await Poster.find({ userId: id });
    return res.status(200).send({ post: post });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// EDIT POST TITLE
router.put("/titleedit/:id", userAuth, async (req, res) => {
  let { id } = req.params;
  console.log(req.body)
  try {
    await Poster.findByIdAndUpdate(id, {
      $set: { posterTitle: req.body.edit },
    });
    res.status(200).send("Title updated");
  } catch (error) {
    res.status(500).send(error);
  }
});
// Delete Poster
router.delete("/delpost/:id", userAuth, async (req, res) => {
  let { id } = req.params;
  try {
    await Poster.findByIdAndDelete(id);
  } catch (error) {
    console.log("Server Error");
  }
});
// Delete profile & all profile posts
router.delete("/delprofile", userAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
  } catch (error) {
    console.log("server error");
  }
});
module.exports = router;
