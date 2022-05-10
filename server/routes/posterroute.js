const express = require("express");
const upload = require("../Middlewares/upload");
const router = express.Router();
const userAuth = require("../Middlewares/userAuth");

router.post("/upload", userAuth, upload.single("myPic"), async (req, res) => {
  const file = req.file;
  try {
    res.send("image uploaded");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
module.exports = router;
