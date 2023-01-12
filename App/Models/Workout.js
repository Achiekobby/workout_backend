const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema(
  {
    user_id:{
      type:String,
      required:true,
    },
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout
