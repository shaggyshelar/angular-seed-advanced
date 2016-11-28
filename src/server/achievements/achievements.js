var utils = require('../utils');
var _ = require('lodash');
var achievementData = require('./achievementData');

module.exports = function (app) {
    app.get('/api/achievement/:id', function (req, res) {
        res.json(achievementData);
    });
    app.post('/api/achievement', function(req, res) {
    console.log(req.body);
       res.json(req.body);
    });
};
