var utils = require('../../utils');
var ticket = require('./ticketData');
var _ = require('lodash');

var getTicket = function (req, res) {
    res.json(ticket.ticketList);
};

module.exports = function (app) {
    app.get('/api/ticket',getTicket);
};