//* importing the User model inside the controller
const User = require('../Models/User')

//* Login a user
const login = async (req, res) => {
  res.json({ message: "Login user" });
};

//* Sign up a user
const signup = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.signup(email, password)
    if(user){
      return res.status(201).json({ email, user })
    }
  } catch (error) {
    res.status(500).json({error:error.message});
  }
};

module.exports = {
  login,
  signup,
};
