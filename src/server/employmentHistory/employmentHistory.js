var utils = require('../utils');
var _ = require('lodash');
var employmentHistoryData = require('./employmentHistoryData');

module.exports = function (app) {
    app.get('/api/EmploymentHistory/:id', function (req, res) {
        res.json(employmentHistoryData);
    });
    app.post('/api/EmploymentHistory', function (req, res) {
        let employmentHistory = req.body;
        employmentHistory.ID = employmentHistoryData.length + 1;
        employmentHistoryData.push(employmentHistory);
        res.sendStatus(200);
    });
    app.put('/api/EmploymentHistory', function (req, res) {
        let employmentHistory = req.body;
        var index = _.findIndex(employmentHistoryData, { ID: employmentHistory.ID });
        employmentHistoryData[index] = employmentHistory;
        res.sendStatus(200);
    });
};
