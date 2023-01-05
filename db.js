const mongoose = require("mongoose");

const dbConnect = async(mongo_uri) => {
  try {
    mongoose.set("strictQuery", false)
    await mongoose
      .connect(mongo_uri)
      .then(() => {
        console.log(`Database has been connected`);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
