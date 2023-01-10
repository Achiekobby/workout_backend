const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
userSchema.statics.signup = async function(email, password){
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

const User = mongoose.model("User", userSchema);
module.exports = User;
