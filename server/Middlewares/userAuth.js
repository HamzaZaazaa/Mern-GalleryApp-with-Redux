const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  const token = req.headers["authorized"];
  try {
    if (!token) {
      // respone status (401 not authorized)
      res.status(401).send({ errors: [{ message: "You are not authorized" }] });
    }
    // verifying token
    const decode = jwt.verify(token, process.env.privateKey);
    // adding user to the req object
    // confirming user id from token data (token data has the user id)
    // request recieved from the token which has the user id
    req.user = {
      id: decode.id,
    };
    next();
  } catch (error) {
    // respone status (401 not authorized)
    res.status(401).send({ errors: [{ message: "You are not authorized" }] });
  }
};

module.exports = userAuth;
