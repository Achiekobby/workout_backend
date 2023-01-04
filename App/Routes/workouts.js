//* Workout Controller imports
const {getAllWorkouts}  = require("../Controllers/WorkoutController")

//* Initialize the express Router
const router =  require('express').Router()

//Tip:: Route to retrieve all the workouts
router.get('/workouts',getAllWorkouts)

module.exports = router