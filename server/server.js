const express = require("express");
const app = express();
const path = require("path");
const connectDb = require("./config/connectDb");
const auth = require("./auth/auth");
const profileroute = require("./routes/userprofileroute");
const galleryroute = require("./routes/galleryRoute");
const commentroute = require("./routes/commentRoute");
const adminroute = require("./routes/adminRoute");
// connect database to the server
connectDb();
// reading JSON format
app.use(express.json());

// routes
app.use("/api/auth", auth);
app.use("/api/profile", profileroute);
app.use("/api/post", galleryroute);
app.use("/api/comments", commentroute);
app.use("/api/admin", adminroute);

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// app running on port 9000
const port = process.env.PORT || 9000;
app.listen(port, (err) => console.log(`app running on port ${port}`));
