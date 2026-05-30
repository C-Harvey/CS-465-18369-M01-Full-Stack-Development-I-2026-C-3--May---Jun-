const fs = require('fs');
const mongoose = require('mongoose');

require('../models/db');

const Trip = mongoose.model('trips');

const trips = JSON.parse(
    fs.readFileSync(__dirname + '/trips.json', 'utf8')
);

async function loadTrips() {

    try {

        await Trip.deleteMany({});

        await Trip.insertMany(trips);

        console.log('Trips loaded');

        process.exit();

    } catch (err) {

        console.log(err);

        process.exit();

    }

}

loadTrips();