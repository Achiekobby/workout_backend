//* List of CRUD operations implementation of the workout application

const getAllWorkouts = (req,res)=>{
  res.send("all workouts")
}

const getWorkout = (req,res)=>{
  res.send("Get single workouts")
}

const createWorkout = (req,res)=>{
  res.send("create a workouts")
}

const updateWorkout = (req,res)=>{
  res.send("update a workouts")
}

const deleteWorkout = (req,res)=>{
  res.send("delete a workouts")
}


module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
}