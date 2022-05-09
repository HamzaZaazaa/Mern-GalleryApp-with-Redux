const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "../client/public/uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5e6 },
  fileFilter: function (req, file, cb) {
    const fileType = /jpeg|jpg|png/gi;
    const extname = fileType.test(path.extname(file.originalname));
    if (extname) {
      cb(null, true);
    } else {
      cb("Error : try another image");
    }
  },
});
module.exports = upload;
