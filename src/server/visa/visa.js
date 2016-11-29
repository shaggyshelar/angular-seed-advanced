var utils = require('../utils');
var _ = require('lodash');
var visaData = require('./visaData');

module.exports = function (app) {
    app.get('/api/Visa/:id', function (req, res) {
        res.json(visaData);
    });
    app.post('/api/Visa', function (req, res) {
        let visa = req.body;
        visa.ID = visaData.length + 1;
        visaData.push(visa);
        res.sendStatus(200);
    });
    app.put('/api/Visa', function (req, res) {
        let visa = req.body;
        var index = _.findIndex(visaData, { ID: visa.ID });
        visaData[index] = visa;
        res.sendStatus(200);
    });
};
