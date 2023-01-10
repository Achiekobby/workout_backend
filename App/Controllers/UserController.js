//* importing the User model inside the controller
const User = require('../Models/User')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{
  return jwt.sign({_id},process.env.TOKEN_SECRET)
}

//* Login a user
const login = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.login(email, password)
    const token = createToken(user._id)
    res.status(200).json({email, token})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

//* Sign up a user
const signup = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.signup(email, password)
    const token = createToken(user._id)
    if(user){
      return res.status(201).json({ email, token })
    }
  } catch (error) {
    res.status(500).json({error:error.message});
  }
};

module.exports = {
  login,
  signup,
};
