const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./client/public/uploads",
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5e6 },
  fileFilter: function (req, file, callback) {
    const fileType = /jpeg|jpg|png/gi;
    const extname = fileType.test(path.extname(file.originalname));
    if (extname) {
      callback(null, true);
    } else {
      callback("Error : try another image");
    }
  },
});
module.exports = upload;
