const express = require("express");
const upload = require("../Middlewares/upload");
const router = express.Router();
const userAuth = require("../Middlewares/userAuth");
const User = require("../Model/User");
// userAuth middleware is giving an error
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
// change your profile picture
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
module.exports = router;
