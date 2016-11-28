var utils = require('../utils');
var _ = require('lodash');
var experienceData = require('./experienceData');

module.exports = function (app) {
    app.get('/api/experience/:id', function (req, res) {
        res.json(experienceData);
    });
};
