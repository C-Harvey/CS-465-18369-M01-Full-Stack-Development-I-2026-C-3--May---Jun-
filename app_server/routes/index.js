const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// GET all trips
router.get('/trips', ctrlTrips.tripsList);

// GET single trip
router.get('/trips/:tripId', ctrlTrips.tripsFindById);

// CREATE trip
router.post('/trips', ctrlTrips.tripsCreateTrip);

// UPDATE trip
router.put('/trips/:tripId', ctrlTrips.tripsUpdateTrip);

// DELETE trip
router.delete('/trips/:tripId', ctrlTrips.tripsDeleteTrip);

module.exports = router;