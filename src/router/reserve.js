const { getAllReservations, getReservationById, createReservation, deleteReservation } = require('../controllers/reserve');

const router = require('express').Router();

router.get('/', (req, res) => {
    return getAllReservations(req, res);
})

router.get('/:id', (req, res) => {
    return getReservationById(req, res);
})

router.post('/', (req, res) => {
    return createReservation(req, res)
})

router.delete('/:id', (req, res) => {
  return deleteReservation(req, res);
})

module.exports = router