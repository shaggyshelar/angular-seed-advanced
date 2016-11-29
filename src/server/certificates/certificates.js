var utils = require('../utils');
var _ = require('lodash');
var certificateData = require('./certificateData');

module.exports = function (app) {
    app.get('/api/Certificate/:id', function (req, res) {
        res.json(certificateData);
    });
    app.post('/api/Certificate', function (req, res) {
        let certificate = req.body;
        certificate.ID = certificateData.length + 1;
        certificateData.push(certificate);
        res.sendStatus(200);
    });
    app.put('/api/Certificate', function (req, res) {
        let certificate = req.body;
        var index = _.findIndex(certificateData, { ID: certificate.ID });
        certificateData[index] = certificate;
        res.sendStatus(200);
    });
};
