const Movies = require('../models/movie')

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.find();
        return res.json({ movies })
    } catch (error) {
        return res.status(500).json({ msg: "Error while retriveng data", error })
    }
}

const getMovieById = async (req, res) => {
    try {
        const movie = await Movies.findById(req.params.id)
        return res.json({ movie })
    } catch (error) {
        return res.status(500).json({ msg: `Error while retriving the Movie`, error })
    }
}

const createMovie = async (req, res) => {
    try {
        const { name } = req.body;
        const movie = await Movies.create({ name })
        return res.status(201).json({ msg: "New Movie!!", "movie": movie })

    } catch (error) {
        return res.status(500).json({ msg: "Error while creating the movie", error })
    }
}

const updateMovie = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    
    if (!name) return res.status(400).json({ msg: "Error: Please make sure Name is provided" })

    try {
        const movie = await Movies.findByIdAndUpdate(id, { name })
        return res.status(202).json({ msg: "updated Movie" })

    } catch (error) {
        return res.status(500).json({ msg: "Error while updateing Movie", error })
    }
}

const deleteMovie = async (req, res) => {
    const { id } = req.params.id;
    if (!id) return res.status(400).json({ msg: "Movie id was not provided", error })
    try {
        const movie = await Movies.findByIdAndDelete(id);

        return res.status(202).json({ msg: "Movie was deleted" })
    } catch (error) {
        res.status(500).json({ msg: "Error while trying to remove the Movie", error })
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}