const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET all trips
module.exports.tripsList = async function(req, res) {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET single trip
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


// POST
module.exports.tripsAddTrip = async function(req, res) {
    try {
        const trip = await Trip.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        res.status(201).json(trip);
    } catch (err) {
        res.status(500).json(err);
    }
};

// PUT update trip
module.exports.tripsUpdateTrip = async function(req, res) {
    try {
        const trip = await Trip.findByIdAndUpdate(
            req.params.tripId,
            req.body,
            { new: true }
        );

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json(trip);
    } catch (err) {
        res.status(400).json(err);
    }
};

// DELETE trip
module.exports.tripsDeleteTrip = async function(req, res) {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.tripId);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.status(200).json({ message: 'Trip deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
};