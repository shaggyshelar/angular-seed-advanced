var utils = require('../utils');
var _ = require('lodash');
var addressData = require('./addressData');

module.exports = function (app) {
    app.get('/api/Address/:id', function (req, res) {
        res.json(addressData);
    });
    app.post('/api/Address', function (req, res) {
        var address = req.body;
        address.ID = addressData.length + 1;
        addressData.push(address);
        res.sendStatus(200);
    });
    app.put('/api/Address', function (req, res) {
        var address = req.body;
        var index = _.findIndex(addressData, { ID: address.ID });
        addressData[index] = address;
        res.sendStatus(200);
    });
};
