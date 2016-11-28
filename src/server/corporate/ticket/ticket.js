var utils = require('../../utils');
var ticketData = require('./ticketData');
var _ = require('lodash');

var getTicket = function (req, res) {
    res.json(ticketData.ticketList);
};

var getTicketById = function (req, res) {
    var id = parseInt(req.params.id);
    var index = _.findIndex(ticketData.ticketList, { id: id });
    res.json(ticketData.ticketList[index]);
};

var saveTicket = function (req, res) {
    var ticket = req.body;
    ticket.id = ++ticketData.ids;
    ticketData.ticketList.push(ticket);
    res.json(ticketData.ticketList);
};

var editTicket = function (req, res) {
    var ticket = req.body;
    var index = _.findIndex(ticketData.ticketList, { id: ticket.id });
    ticketData.ticketList[index] = ticket
    res.json(ticketData.ticketList);
};

module.exports = function (app) {
    app.get('/api/ticket', getTicket);
    app.get('/api/ticket/:id', getTicketById);
    app.post('/api/ticket', saveTicket);
    app.put('/api/ticket', editTicket);
};