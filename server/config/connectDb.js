const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async () => {
  // Connecting database to server...
  try {
    await mongoose.connect(
      process.env.MONGO_URI 
    );
    console.log("DB is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
