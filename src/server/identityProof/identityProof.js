var utils = require('../utils');
var _ = require('lodash');
var identityProofData = require('./identityProofData');

module.exports = function (app) {
    app.get('/api/IdentityProof/:id', function (req, res) {
        res.json(identityProofData);
    });
};
