var utils = require('../utils');
var _ = require('lodash');
var visaData = require('./visaData');

module.exports = function (app) {
    app.get('/api/Visa/:id', function (req, res) {
        res.json(visaData);
    });
};
