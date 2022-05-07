const express = require("express");
const app = express();
const connectDb = require("./server/config/connectDb");
const auth = require("./server/auth/auth");
const usercomment = require("./server/routes/commentRoute");
// reading JSON format
app.use(express.json());

// routing after /api/users
app.use("/api/auth", auth);
app.use("/api/social", usercomment);

// function to connect database to the server
connectDb();

// app running on port 9000
const port = 9000;
app.listen(port, (err) => console.log(`app running on port ${port}`));
