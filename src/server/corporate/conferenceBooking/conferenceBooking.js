var utils = require('../../utils');
var conferenceBooking = require('./conferenceBookingData');
var _ = require('lodash');

var getConferenceBookingEvents = function (req, res) {
    res.json(conferenceBooking.conferenceBookingList);
};
var saveConference = function (req, res) {
    var conference = req.body;
    conference.Id = ++conferenceBooking.ids;
    conferenceBooking.conferenceBookingList.push(conference);
    res.json(conference);
};
var getMyBookings = function (req, res) {
    res.json(conferenceBooking.conferenceBookingList);
};
module.exports = function (app) {
    app.get('/api/conferenceBooking',getConferenceBookingEvents);
    app.post('/api/conferenceBooking',saveConference);
    app.get('/api/conferenceBooking/:id',getMyBookings);
};