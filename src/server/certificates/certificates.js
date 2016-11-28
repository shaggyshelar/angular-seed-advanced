var utils = require('../utils');
var _ = require('lodash');
var certificateData = require('./certificateData');

module.exports = function (app) {
    app.get('/api/certificate/:id', function (req, res) {
        res.json(certificateData);
    });
};
