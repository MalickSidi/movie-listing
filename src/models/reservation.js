const mongoose = require('mongoose')

const reservationScheme = new mongoose.Schema({
    movie: String,
    timeslot: String,
    spots: Number
})

const Reservation = mongoose.model('Reservation', reservationScheme)

module.exports = Reservation