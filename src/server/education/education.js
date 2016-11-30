var utils = require('../utils');
var _ = require('lodash');
var educationData = require('./educationData');

module.exports = function (app) {
    app.get('/api/Education/:id', function (req, res) {
        res.json(educationData);
    });
    app.post('/api/Education', function (req, res) {
        var education = req.body;
        education.ID = educationData.length + 1;
        educationData.push(education);
        res.sendStatus(200);
    });
    app.put('/api/Education', function (req, res) {
        var education = req.body;
        var index = _.findIndex(educationData, { ID: education.ID });
        educationData[index] = education;
        res.sendStatus(200);
    });
};
