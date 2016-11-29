var utils = require('../utils');
var _ = require('lodash');
var skillData = require('./skillsData');

module.exports = function (app) {
    app.get('/api/Skill/:id', function (req, res) {
        res.json(skillData);
    });
    app.post('/api/Skill', function (req, res) {
        let skill = req.body;
        skill.ID = skillData.length + 1;
        skillData.push(skill);
        res.sendStatus(200);
    });
    app.put('/api/Skill', function (req, res) {
        let skill = req.body;
        var index = _.findIndex(skillData, { ID: skill.ID });
        skillData[index] = skill;
        res.sendStatus(200);
    });
};
