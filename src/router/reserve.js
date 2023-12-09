
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
    
})

router.delete('/:id', (req, res) => {
    
})

module.exports = router