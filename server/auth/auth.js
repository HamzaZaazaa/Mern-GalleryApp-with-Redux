const express = require("express");
const userroute = express.Router();
const Usercontact = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  validator,
  requirements,
  signinRequirements,
} = require("../Middlewares/validator");
const userAuth = require("../Middlewares/userAuth");

// SIGN UP
userroute.post("/signup", requirements, validator, async (req, res) => {
  // data from user form
  let { name, lastname, email, password } = req.body;
  try {
    // check existing email
    const existEmail = await Usercontact.findOne({ email });
    if (existEmail) {
      // respone status (400 bad request)
      return res
        .status(400)
        .send({ errors: [{ message: "email already used" }] });
    }
    // new user creation
    let user = await new Usercontact({ name, lastname, password, email });
    // crypting password
    const salt = 10;
    user.password = await bcrypt.hash(password, salt);
    // saving user info to database
    await user.save();
    // generating web token
    const data = {
      id: user._id,
    };
    const token = jwt.sign(data, process.env.privateKey, { expiresIn: "1d" });
    // respone status (200 ok)
    res
      .status(200)
      .send({ message: "User signed up successfully", user, token });
  } catch (error) {
    // respone status (500 server error)
    res.status(500).send("Server Error");
  }
});

// LOG IN
userroute.post("/signin", signinRequirements, validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if user was created with the mail
    const user = await Usercontact.findOne({ email });
    // if not signed up response status (400 bad request)
    if (!user) {
      return res.status(400).send({ errors: [{ message: "Wrong input" }] });
    }
    // comparing login password to the crypted signup password
    const matching = await bcrypt.compare(password, user.password);
    if (!matching) {
      return res.status(400).send({ errors: [{ message: "Wrong input" }] });
    }
    // generating web token
    const data = {
      id: user._id,
    };
    const token = jwt.sign(data, process.env.privateKey, { expiresIn: "1d" });
    // respone status (200 ok)
    res
      .status(200)
      .send({ message: "User logged in successfully", user, token });
  } catch (error) {
    // respone status (500 server error)
    res.status(500).send("Server Error");
  }
});
// Keeping user authorized
userroute.get("/me", userAuth, async (req, res) => {
  try {
    const user = await Usercontact.findById(req.user.id);
    // respone status (200 ok)
    res.status(200).send(user);
  } catch (error) {
    // respone status (500 server error)
    res.status(500).send("Server Error");
  }
});
module.exports = userroute;
