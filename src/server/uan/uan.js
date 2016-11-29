var utils = require('../utils');
var _ = require('lodash');
var uanData = require('./uanData');

module.exports = function (app) {
    app.get('/api/Uan/:id', function (req, res) {
        res.json(uanData);
    });
};
