var utils = require('../utils');
var leaves = require('./leaveData');
var user = require('./userData');
var leaveCount = require('./leaveCountData');
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

    app.post('/api/leave', function (req, res) {
        if (req.body != null) {
            leaves.push(req.body);
            res.sendStatus(201);
        } else {
            res.status(500).end('Bad Request.');
        }
    });

    app.put('/api/leave', function (req, res) {
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
            res.status(500).end('Bad Request.');
        }
    });

    app.get('/api/leave/count', function (req, res) {
        console.log('/api/leave/count');
        res.json(leaveCount);
    });


    app.get('/api/leave/userData', function (req, res) {
        res.json(user);
    });
}
