const Reservation = require('../models/reservation')
const Movie = require('../models/movie')
const Timeslots = require('../models/timeslot')

const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        return res.json({ reservations })
    } catch (error) {
        return res.status(500).json({ msg: "Error while retriveng data", error })
    }
}

const getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id)
        return res.json({ reservation })
    } catch (error) {
        return res.status(500).json({ msg: `Error while retriving the timeslots`, error })
    }
}

const createReservation = async (req, res) => {
    const { movie_id, timeslot_id, spots } = req.body;
    try {
        const movie = await Movie.findById(movie_id)
        const timeslot = await Timeslots.findById(timeslot_id)

        if (!(timeslot.available > 0)) {
            return res.status(405).json({ msg: "This timeslot is unavailable." })
        }
        const reservation = await Reservation.create({ movie, timeslot, spots })
        await Timeslots.findByIdAndUpdate(timeslot_id, { available: (timeslot.available - spots) })

        return res.status(201).json({ msg: "New Reservation was created!!", "Reservation": reservation })

    } catch (error) {
        return res.status(500).json({ msg: "Error while creating the Reservation", error })
    }
}

const deleteReservation = async (req, res) => {
    const { id } = req.params.id;
    if (!id) return res.status(400).json({ msg: "Timeslot id was not provided", error })
    try {
        const reservation = await Reservation.findByIdAndDelete(id);
        await Timeslots.findByIdAndUpdate(reservation.timeslot._id, { available: (available + reservation.spots) })
        return res.status(202).json({ msg: "Timeslot was deleted" })
    } catch (error) {
        res.status(500).json({ msg: "Error while trying to remove the Timeslot", error })
    }
}

module.exports = {
    getAllReservations,
    getReservationById,
    createReservation,
    deleteReservation
}
