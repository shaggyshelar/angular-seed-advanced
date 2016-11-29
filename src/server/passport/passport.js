var utils = require('../utils');
var _ = require('lodash');
var passportData = require('./passportData');

module.exports = function (app) {
    app.get('/api/Passport/:id', function (req, res) {
        res.json(passportData);
    });
};
