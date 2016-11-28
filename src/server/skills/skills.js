var utils = require('../utils');
var _ = require('lodash');
var skillData = require('./skillsData');

module.exports = function (app) {
    app.get('/api/skill/:id', function (req, res) {
        res.json(skillData);
    });
};
