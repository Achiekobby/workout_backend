const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//* static signup method for extra layer of validation
userSchema.statics.signup = async function (email, password) {
  //* Input validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email must be a valid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already Exists");
  }
  //* Hashing the password before insertion into the database
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

userSchema.statics.login = async function (email, password) {
  //* Input validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({email})
  if(!user){
    throw Error('User not found')
  }
  const match_password = await bcrypt.compare(password, user.password)
  if(!match_password){
    throw Error('Incorrect Password')
  }
  return user
};


const User = mongoose.model("User", userSchema);
module.exports = User;
