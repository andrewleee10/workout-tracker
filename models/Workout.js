const { model, Schema } = require('mongoose')

module.exports = model('Workout', new Schema({
  day: Date,
  exercises: {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  }
}))