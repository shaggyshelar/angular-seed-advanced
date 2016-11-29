var utils = require('../utils');
var _ = require('lodash');
var nomineesData = require('./nomineesData');

module.exports = function (app) {
    app.get('/api/Nominee/:id', function (req, res) {
        res.json(nomineesData);
    });
};
