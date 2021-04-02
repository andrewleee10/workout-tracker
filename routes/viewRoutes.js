const router = require('express').Router()
const { Workout } = require('../models')


router.get('/exercise', (req, res) => Workout.find()
  .then(workouts => {
    console.log(workouts)
    res.json(workouts)
  })
  .catch(err => console.log(err)))

router.get('/exercise/:id', (req, res) => Workout.findById(req.params.id)
  .then(workout => res.json(workout))
  .catch(err => console.log(err)))

module.exports = router
