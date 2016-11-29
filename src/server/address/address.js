var utils = require('../utils');
var _ = require('lodash');
var addressData = require('./addressData');

module.exports = function (app) {
    app.get('/api/Address/:id', function (req, res) {
        res.json(addressData);
    });
};
