const { trips } = require('../data/trips');

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel',
        trips
    });
};

module.exports = {
    travel
};