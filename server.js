const express = require('express')
const morgan = require('morgan')
const { join } = require('path')

const app = express()

app.use(morgan("dev"))

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))
