const express = require("express");
const app = express();
const connectDb = require("./server/config/connectDb");
const auth = require("./server/auth/auth");

// reading JSON format
app.use(express.json());

// routing after /api/users
app.use("/api/auth", auth);

// function to connect database to the server
connectDb();

// app running on port 9000
const port = 9000;
app.listen(port, (err) => console.log(`app running on port ${port}`));
