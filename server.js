//* Initializing express package for node
const express = require("express");
const app = express();

//* Initialize the dotenv package
require("dotenv").config();

//* making the application accept json request structure
app.use(express.json());

//* import the workout Routes
const workoutRoutes = require("./App/Routes/workouts.js")

//* using the workouts routes
app.use('/api',workoutRoutes)

const start = () => {
  const port = process.env.SERVER_PORT;
  try {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(err);
  }
};

start();
