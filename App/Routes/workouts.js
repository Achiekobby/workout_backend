//* Workout Controller imports
const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../Controllers/WorkoutController");
const requireAuth = require("../../Middleware/RequireAuth");


//* Initialize the express Router
const router = require("express").Router();

//* Middleware to check logged in user
router.use(requireAuth);

//Tip:: Route to retrieve all the workouts
router.get("/workouts",       getAllWorkouts);
router.get("/workout/:id",   getWorkout);
router.post("/workout",       createWorkout);
router.patch("/workout/:id",  updateWorkout);
router.delete("/workout/:id", deleteWorkout);

module.exports = router;
