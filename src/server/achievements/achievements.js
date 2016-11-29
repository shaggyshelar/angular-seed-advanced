var utils = require('../utils');
var _ = require('lodash');
var achievementData = require('./achievementData');

module.exports = function (app) {
    app.get('/api/Achievement/:id', function (req, res) {
        res.json(achievementData);
    });
    app.post('/api/Achievement', function (req, res) {
        console.log(req.body);
        res.json(req.body);
    });
};
