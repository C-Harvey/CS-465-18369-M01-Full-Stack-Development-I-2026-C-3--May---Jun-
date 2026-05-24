const trips = require('../data/trips.json');

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel',
        trips
    });
};

module.exports = {
    travel
};