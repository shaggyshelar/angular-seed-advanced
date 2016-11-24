var utils = require('../../utils');
var conferenceBooking = require('./conferenceBookingData');
var _ = require('lodash');

var getConferenceBookingEvents = function (req, res) {
    res.json(conferenceBooking.conferenceBookingList);
};

module.exports = function (app) {
    app.get('/api/conferenceBooking',getConferenceBookingEvents);
};
