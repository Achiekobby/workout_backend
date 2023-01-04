//* Workout Controller imports
const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../Controllers/WorkoutController");

//* Initialize the express Router
const router = require("express").Router();

//Tip:: Route to retrieve all the workouts
router.get("/workouts",       getAllWorkouts);
router.get("/workout/:id",   getWorkout);
router.post("/workout",       createWorkout);
router.patch("/workout/:id",  updateWorkout);
router.delete("/workout/:id", deleteWorkout);

module.exports = router;
