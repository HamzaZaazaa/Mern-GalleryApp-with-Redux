const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const auth = require("./auth/auth");
const profileroute = require("./routes/userprofileroute");
const galleryroute = require("./routes/galleryRoute");
const commentroute = require("./routes/commentRoute");

// connect database to the server
connectDb();
// reading JSON format
app.use(express.json());

// routes
app.use("/api/auth", auth);
app.use("/api/profile", profileroute);
app.use("/api/post", galleryroute);
app.use("/api/comments", commentroute);

// app running on port 9000
const port = 9000;
app.listen(port, (err) => console.log(`app running on port ${port}`));
