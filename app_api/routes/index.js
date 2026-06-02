const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

/*
  API ROUTES
  Separation of Concerns
*/

/*
  GET all trips
  Returns JSON array of all trips
*/
router.get('/trips', ctrlTrips.tripsList);

/*
  GET single trip by MongoDB _id
  Returns one trip document
*/
router.get('/trips/:tripId', ctrlTrips.tripsFindById);

module.exports = router;