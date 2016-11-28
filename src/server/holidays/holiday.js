var utils = require('../utils');
var holidays = require('./holidayData');
var _ = require('lodash');

module.exports = function (app) {
    app.get('/api/holidays/:id', function (req, res) {
        var id = req.params.id;
        for (var index in holidays) {
            if (holidays[index].id == id) {
                res.json(holidays[index]);
                return;
            }
        }
    });
    app.get('/api/holidays', function (req, res) {
        res.json(holidays);
    });
}