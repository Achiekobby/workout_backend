//* Import Workout model
const Workout = require("../Models/Workout");

//* Mongoose
const mongoose = require("mongoose");

//* List of CRUD operations implementation of the workout application

const getAllWorkouts = async (req, res) => {
  try {
    let workouts = await Workout.find({}).sort({ createdAt: -1 });
    if (workouts.length === 0) {
      return res
        .status(404)
        .json({ message: "No workout routine has been created yet" });
    }
    return res.status(200).json({ workouts: workouts });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getWorkout = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).json({ error: "workout id passed is invalid" });
    }
    const workout = await Workout.findById({ _id: id });
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    return res.status(201).json({ workout: workout });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    let emptyFields = []
    if(!title){
      emptyFields.push('title')
    }
    if(!load){
      emptyFields.push('load')
    }
    if(!reps){
      emptyFields.push('reps')
    }

    if(emptyFields.length >0){
      return res.status(400).json({error:'Please fill in all the fields', emptyFields})
    }
    let new_workout = await Workout.create({ title, load, reps });
    if (new_workout) {
      res.status(200).json(new_workout);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateWorkout = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).json({ error: "The id passed is invalid" });
    }
    const new_workout_details = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (new_workout_details) {
      return res.status(200).json({
        status: "success",
        message: "Workout has been updated successfully",
        workout: new_workout_details,
      });
    }
    return res
      .status(404)
      .json({ status: "failed", message: "Workout not found" });
  } catch (error) {
    res.status(500).json({ status: "failed", error: error });
  }
};

const deleteWorkout = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).json({ error: "The id passed is invalid" });
    }
    let workout = await Workout.findOneAndDelete({ _id: id });
    if (workout) {
      return res.status(200).json({
        status: "success",
        message: "successfully deleted an item from the workout",
        workout: workout,
      });
    }
    return res
      .status(404)
      .json({ status: "failed", message: "The workout was not found" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
