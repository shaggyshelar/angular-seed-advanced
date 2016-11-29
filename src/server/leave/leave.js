var utils = require('../utils');
var leaves = require('./leaveData');
var user = require('./userData');
var leaveCount = require('./leaveCountData');
var _ = require('lodash');

module.exports = function (app) {

    app.get('/api/Leave/:id', function (req, res) {
        var id = req.params.id;
        for (var index in leaves) {
            if (leaves[index].id == id) {
                res.json(leaves[index]);
                return;
            }
        }
    });

    app.get('/api/Leave', function (req, res) {
        res.json(leaves);
    });

    app.post('/api/Leave', function (req, res) {
        if (req.body != null) {
            leaves.push(req.body);
            res.sendStatus(201);
        } else {
            res.sendSatus(500).end('Bad Request.');
        }
    });

    app.put('/api/Leave/:id', function (req, res) {
        if (req.body != null && req.params.id) {
            var id = req.params.id;
            for (var index in leaves) {
                if (leaves[index].id == id) {
                    leaves[index] = req.body;
                    break;
                }
            }
            res.sendStatus(201);
        }
        else {
            res.sendSatus(500).end('Bad Request.');
        }
    });

    app.get('/api/Leaves/GetCount', function (req, res) {
        res.json(leaveCount);
    });


    app.get('/api/Leaves/GetUserDetails', function (req, res) {
        res.json(user);
    });
}
