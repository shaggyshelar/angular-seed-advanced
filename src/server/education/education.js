var utils = require('../utils');
var _ = require('lodash');
var educationData = require('./educationData');

module.exports = function (app) {
    app.get('/api/education/:id', function (req, res) {
        res.json(educationData);
    });
};
