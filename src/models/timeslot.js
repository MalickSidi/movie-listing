const mongoose = require('mongoose')

const timeslotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: String,
    capcity: Number,
    available: Number
})

const Timeslot = mongoose.model('Timeslot', timeslotSchema)

module.exports = Timeslot