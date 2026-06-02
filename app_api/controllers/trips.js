const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

/*
  GET /api/trips
*/
module.exports.tripsList = async function(req, res) {

    try {

        const trips = await Trip.find();
        res.status(200).json(trips);

    } catch (err) {

        res.status(500).json(err);
    }
};

/*
  GET /api/trips/:tripId
*/
module.exports.tripsFindById = async function(req, res) {

    try {

        const trip = await Trip.findById(req.params.tripId);

        if (!trip) {
            return res.status(404).json({
                message: 'Trip not found'
            });
        }

        res.status(200).json(trip);

    } catch (err) {

        res.status(500).json(err);
    }
};