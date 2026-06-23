const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET all
module.exports.tripsList = async function(req, res) {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET one
module.exports.tripsFindById = async function(req, res) {
    try {
        const trip = await Trip.findById(req.params.tripId);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

// CREATE
module.exports.tripsCreateTrip = async function(req, res) {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json(trip);
    } catch (err) {
        res.status(400).json(err);
    }
};

// UPDATE
module.exports.tripsUpdateTrip = async function(req, res) {
    try {
        const trip = await Trip.findByIdAndUpdate(
            req.params.tripId,
            req.body,
            { new: true }
        );

        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

// DELETE
module.exports.tripsDeleteTrip = async function(req, res) {
    try {
        await Trip.findByIdAndDelete(req.params.tripId);
        res.status(200).json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
};