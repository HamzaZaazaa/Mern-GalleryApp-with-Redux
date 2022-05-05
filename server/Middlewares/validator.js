const { body, validationResult } = require("express-validator");

// Required inputs in the form
const requirements = [
  body("name", "Name is required!").notEmpty(),
  body("lastname", "Lastname is required!").notEmpty(),
  body("email", "unvalid email").isEmail(),
  body("password", "password must be 8 or more characters").isLength({
    min: 8,
  }),
];
const signinRequirements = [
  body("email", "unvalid email").isEmail(),
  body("email", "Email is required").notEmpty(),
  body("password", "password is required").notEmpty(),
];
// Validate the input
const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
module.exports = { requirements, validator, signinRequirements };
