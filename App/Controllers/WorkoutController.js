//* Import Workout model
const Workout = require("../Models/Workout");

//* List of CRUD operations implementation of the workout application

const getAllWorkouts = (req, res) => {
  res.send("all workouts");
};

const getWorkout = (req, res) => {
  res.send("Get single workouts");
};

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    let new_workout = await Workout.create({ title, load, reps });
    if (new_workout) {
      res.status(200).json(new_workout);
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateWorkout = (req, res) => {
  res.send("update a workouts");
};

const deleteWorkout = (req, res) => {
  res.send("delete a workouts");
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
