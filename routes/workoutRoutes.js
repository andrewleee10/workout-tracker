const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => Workout.find()
  .then(workouts => res.json(workouts))
  .catch(err => console.log(err)))

router.post('/workouts', (req, res) => Workout.create(req.body)
  .then(workout => res.json(workout))
  .catch(err => console.log(err)))

router.put('/workouts/:id', (req, res) => Workout.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

router.delete('/workouts/:id', (req, res) => Workout.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
