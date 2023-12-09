const Timeslot = require('../models/timeslot');

const getAllTimeslots = async (req, res) => {
    try {
        const timeslots = await Timeslot.find();
        return res.json({timeslots})
    } catch (error) {
        return res.status(500).json({msg: "Error while retriveng data", error})
    }
}

const getTimeslotById = async (req, res) => {
    if (!req.body.id) return res.status(400).json({msg: "Error: Make sure id was provided"})
    try {
        const timeslot = await Timeslot.findById(req.body.id)
        return res.json(timeslot)
    } catch (error) {
        return res.status(500).json({msg: "Error while trying to find time slot", error})
    }
}

const createMovie = async (req, res) => {
    try {
        const {name} = req.body;
        const movie = await Movies.create({name})
        return res.status(201).json({msg: "New Movie!!", "movie": movie})
        
    } catch (error) {
        return res.status(500).json({msg: "Error while creating the movie", error})
    }
}

const updateMovie = async (req, res) => {
    const { name } = req.body
    if (!name) return res.status(400).json({msg: "Error: Please make sure Name is provided correctly: (id, name)"})
    
    try {
        const movie = await Movies.findOne(id)


    } catch (error) {
        
    }
}

const deleteMovie = async (req, res) => {

}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    deleteMovie
}