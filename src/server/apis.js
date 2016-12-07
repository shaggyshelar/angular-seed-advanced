var utils = require('./utils');
var users = require('./userData');
var _ = require('lodash');

module.exports = function (app) {
    var usersData = [
        { id: 1, name: 'mahesh', age: '31', email: 'kedari.mahesh@gmail.com' },
        { id: 2, name: 'Sachin', age: '28', email: 'sachin@gmail.com' },
        { id: 3, name: 'Mukul', age: '28', email: 'mukul@gmail.com' }
    ];
    app.post('/api/Auth', function (req, res) {
        var userName = req.body.UserName;
        var password = req.body.Password;
        var userIndex = _.findIndex(users, { UserName: userName, Password: password });
        if (userIndex != '-1') {
            var token = utils.CreateJWT(users[userIndex]);
            res.send({ token: token });
        } else {
            res.status(401).json({error:'Invalid userName Password.'});
        }
    });

    app.get('/api/Auth', utils.EnsureAuthenticated, function (req, res) {
        var userIndex = _.findIndex(users, { Id: req.userID });
        res.json(users[userIndex].Permissions);
    });

    app.get('/api/getHolidays', function (req, res) {
        res.json([
            { id: '1111', date: '11/11/1111', title: 'Laxmi Puja', type: 'Fixed' },
            { id: '2222', date: '22/22/1111', title: 'Bhai Duj', type: 'Floating' },
            { id: '3333', date: '33/33/1111', title: 'Christmas', type: 'Fixed' },
            { id: '4444', date: '44/44/1111', title: 'New Year', type: 'Floating' },
        ]);
    });

    app.get('/api/getTimesheets', function (req, res) {
        res.json([
            { id: '11111', date: '11/11/1111', billableHours: '11:11', nonBillableHours: '12:12', name: 'Records 1' },
            { id: '22222', date: '22/11/1111', billableHours: '22:11', nonBillableHours: '22:12', name: 'Records 1' },
            { id: '3333', date: '33/11/1111', billableHours: '33:11', nonBillableHours: '33:12', name: 'Records 1' },
            { id: '4444', date: '44/11/1111', billableHours: '44:11', nonBillableHours: '44:12', name: 'Records 1' },
        ]);
    });
    app.get('/api/user/:id', function (req, res) {
        var id = req.params.id;
        for (var index in usersData) {
            if (usersData[index].id == id) {
                res.json(usersData[index]);
                return;
            }
        }
        res.status(404).end(`{
            "error": {
                "code": "404",
                "message": "Invalid User Id"
            }
        }`);
    })
    app.get('/api/user', function (req, res) {
        res.json(usersData);
        /*res.status(500).end(`{
            "error": {
                "code": "501",
                "message": "Invalid credentials."
            }
        }`);*/
    });
    app.post('/api/user', function (req, res) {
        res.json(req.body);
    })
    app.put('/api/user', function () {
        res.json(req.body);
    });
    app.delete('/api/user/:id', function (req, res) {
        var id = req.param.id;
        for (var index in this.users) {
            if (this.users[index].id == id) {
                var newArray = this.users.splice(index, i);
                console.log(newArray);
                res.send(true);
                return;
            }
        }
        res.send(false);
    });

    app.get('/api/timesheet/employee', function (req, res) {
        res.json(
            [{
                id: 1,
                employee: '',
                approverUser: 'Abc',
                startDate: '20-11-2018',
                endDate: '25-11-2018',
                billableHours: 10,
                nonBillableHours: 2,
                status: 'Submitted',
                pendingApprover: ''
            },
            {
                id: 2,
                employee: '',
                approverUser: 'xyz',
                startDate: '25-11-2018',
                endDate: '28-11-2018',
                billableHours: 20,
                nonBillableHours: 12,
                status: 'Not-Submitted',
                pendingApprover: ''
            }, {
                id: 3,
                employee: '',
                approverUser: 'DEF',
                startDate: '02-12-2018',
                endDate: '12-12-2018',
                billableHours: 30,
                nonBillableHours: 12,
                status: 'Approved',
                pendingApprover: ''
            }, {
                id: 4,
                employee: '',
                approverUser: 'PQR',
                startDate: '03-10-2017',
                endDate: '25-10-2017',
                billableHours: 20,
                nonBillableHours: 2,
                status: 'Submitted',
                pendingApprover: ''
            }, {
                id: 5,
                employee: '',
                approverUser: 'stu',
                startDate: '15-11-2017',
                endDate: '25-11-2017',
                billableHours: 17,
                nonBillableHours: 5,
                status: 'Not-Submitted',
                pendingApprover: ''
            }, {
                id: 6,
                employee: '',
                approverUser: 'wyz',
                startDate: '17-10-2018',
                endDate: '20-10-2018',
                billableHours: 18,
                nonBillableHours: 12,
                status: 'Submitted',
                pendingApprover: ''
            }
            ]
        );
    });
};
