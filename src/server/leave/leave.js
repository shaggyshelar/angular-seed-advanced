var utils = require('../utils');
var user = require('./userData');
var leaveDetails = require('./ILeaveDetail');
var leave = require('./ILeave');
var _ = require('lodash');

module.exports = function (app) {

    app.get('/api/Leave/:id', function (req, res) {
        var id = req.params.id;
        for (var index in leave) {
            if (leave[index].ID == id) {
                res.json(leave[index]);
                return;
            }
        }
    });

    app.get('/api/Leave', function (req, res) {
        res.json(leave);
    });

    app.post('/api/Leave', function (req, res) {
        if (req.body != null) {
            req.body.ID = leave.length + 1;
            req.body.Status = 'Pending';
            leave.push(req.body);
            res.sendStatus(201);
        } else {
            res.sendSatus(500).end('Bad Request.');
        }
    });

    app.put('/api/Leave/:id', function (req, res) {
        if (req.body != null && req.params.id) {
            var id = req.params.id;
            for (var index in leave) {
                if (leave[index].ID == id) {
                    leave[index] = req.body;
                    break;
                }
            }
            res.sendStatus(201);
        }
        else {
            res.sendSatus(500).end('Bad Request.');
        }
    });

    app.get('/api/Leaves/Detail', function (req, res) {
        res.json(leaveDetails);
    });


    app.get('/api/Leaves/GetUserDetails', function (req, res) {
        res.json(user);
    });
}
