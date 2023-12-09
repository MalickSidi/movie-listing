const express = require('express')

const movies = require('./router/movies')
const timeslots = require('./router/timeslot')
const reservations = require('./router/reserve')

const app = express()
app.use(express.json())

app.use('/api/v1/movies', movies)
app.use('/api/v1/timeslots', timeslots)
app.use('/api/v1/reservations', reservations)

module.exports = app