//* importing the User model inside the controller
const User = require('../Models/User')

//* Login a user
const login = async (req, res) => {
  res.json({ message: "Login user" });
};

//* Sign up a user
const signup = async (req, res) => {
  res.json({ message: "Sign up user" });
};

module.exports = {
  login,
  signup,
};
