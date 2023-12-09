const { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../controllers/movie');

const router = require('express').Router();

router.get('/', (req, res) => {
    return getAllMovies(req, res);
})

router.get('/:id', (req, res) => {
    return getMovieById(req, res);
})

router.post('/', (req, res) => {
    return createMovie(req, res)
})

router.put('/:id', (req, res) => {
    return updateMovie(req,res)
})

router.delete('/:id', (req, res) => {
    return deleteMovie
})

module.exports = router