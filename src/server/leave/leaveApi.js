var utils = require('../utils');
var leaves = require('./leaveData');
var _ = require('lodash');

module.exports = function (app) {
    app.get('/api/leave/:id', function (req, res) {
        var id = req.params.id;
        for (var index in leaves) {
            if (leaves[index].id == id) {
                res.json(leaves[index]);
                return;
            }
        }
    });
    app.get('/api/leave', function (req, res) {
        res.json(leaves);
    });
}