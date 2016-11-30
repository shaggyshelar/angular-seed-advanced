var utils = require('../utils');
var _ = require('lodash');
var experienceData = require('./experienceData');

module.exports = function (app) {
    app.get('/api/Experience/:id', function (req, res) {
        res.json(experienceData);
    });
    app.post('/api/Experience', function (req, res) {
        var experience = req.body;
        experience.ID = experienceData.length + 1;
        experienceData.push(experience);
        res.sendStatus(200);
    });
    app.put('/api/Experience', function (req, res) {
        var experience = req.body;
        var index = _.findIndex(experienceData, { ID: experience.ID });
        experienceData[index] = experience;
        res.sendStatus(200);
    });
};
