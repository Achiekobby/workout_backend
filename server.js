//* import database connection
const dbConnect = require("./db");

//* Initializing express package for node
const express = require("express");
const app = express();

//* Initialize the dotenv package
require("dotenv").config();

//* making the application accept json request structure
app.use(express.json());

//* import the workout Routes
const workoutRoutes = require("./App/Routes/workouts.js");

//* import the user routers
const userRoutes = require('./App/Routes/user')

//* using the workouts routes
app.use("/api", workoutRoutes);

//* using the user routes
app.use("/api/user", userRoutes);

const start = async () => {
  await dbConnect(process.env.MONGO_URI)
    .then(() => {
      app.listen(process.env.SERVER_PORT, () => {
        console.log(
          `server has been connected on port ${process.env.SERVER_PORT}`
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
start();
