var utils = require('../utils');
var _ = require('lodash');
var employmentHistoryData = require('./employmentHistoryData');

module.exports = function (app) {
    app.get('/api/employmentHistory/:id', function (req, res) {
        res.json(employmentHistoryData);
    });
};
