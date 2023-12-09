const Timeslots = require('../models/timeslot')

const getAllTimeslots = async (req, res) => {
    try {
        const timeslots = await Timeslots.find();
        return res.json({ timeslots })
    } catch (error) {
        return res.status(500).json({ msg: "Error while retriveng data", error })
    }
}

const getTimeslotById = async (req, res) => {
    try {
        const timeslot = await Timeslots.findById(req.params.id)
        return res.json({ movie })
    } catch (error) {
        return res.status(500).json({ msg: `Error while retriving the timeslots`, error })
    }
}

const createTimeslot = async (req, res) => {
    const { name, date, capacity } = req.body;
    try {

        const timeslot = await Timeslots.create({ name, date, capacity, available: capacity })
        return res.status(201).json({ msg: "New Timeslot!!", "Timeslot": timeslot })

    } catch (error) {
        return res.status(500).json({ msg: "Error while creating the timeslot", error })
    }
}

const updateTimeslot = async (req, res) => {
    const { id } = req.params
    const { name, date, capacity } = req.body

    if (!name, !date, !capacity) return res.status(400).json({ msg: "Error: Please make sure Required data is provided [name, date, capacity]" })

    try {
        const timeslot = await Timeslots.findByIdAndUpdate(id, { name, date, capacity })
        return res.status(202).json({ msg: "Timeslot updated" })

    } catch (error) {
        return res.status(500).json({ msg: "Error while updateing Timeslot", error })
    }
}

const deleteTimeslot = async (req, res) => {
    const { id } = req.params.id;
    if (!id) return res.status(400).json({ msg: "Timeslot id was not provided", error })
    try {
        const timeslot = await Timeslots.findByIdAndDelete(id);

        return res.status(202).json({ msg: "Timeslot was deleted" })
    } catch (error) {
        res.status(500).json({ msg: "Error while trying to remove the Timeslot", error })
    }
}

module.exports = {
    getAllTimeslots,
    getTimeslotById,
    createTimeslot,
    updateTimeslot,
    deleteTimeslot
}
