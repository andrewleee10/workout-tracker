const { model, Schema } = require('mongoose')

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
},{ toJSON: { virtuals: true }, toObject: { virtuals: true } })

WorkoutSchema.virtual("totalDuration").get( function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration
  }, 0)
})

WorkoutSchema.plugin(require('mongoose-lean-virtuals'))

module.exports = model('Workout', WorkoutSchema)
