const mongoose = require('mongoose')
const Movie = require('./Movie')
const Timeslot = require('./timeslot')

const reservationScheme = new mongoose.Schema({
    movie: Movie,
    timeslot: Timeslot
})

const Reservation = mongoose.Model(reservationScheme)

module.exports = Reservation