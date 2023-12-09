const { getAllTimeslots, getTimeslotById, createTimeslot, updateTimeslot, deleteTimeslot } = require('../controllers/timeslot');

const router = require('express').Router();

router.get('/', (req, res) => {
    return getAllTimeslots(req, res);
})

router.get('/:id', (req, res) => {
    return getTimeslotById(req, res);
})

router.post('/', (req, res) => {
    return createTimeslot(req, res)
})

router.put('/:id', (req, res) => {
    return updateTimeslot(req, res)
})

router.delete('/:id', (req, res) => {
    return deleteTimeslot(req, res)
})

module.exports = router