// List of hardcoded features along with their details.
var ileavetype = require('./ILeaveType');
var ileave = [
    {
        ID: 6527,
        User: {
            ID: 12345,
            Name: 'FName Lname'
        },
        Type: ileavetype[2],
        StartDate: new Date('12/12/2016 00:00:00'),
        EndDate: new Date('12/12/2016 00:00:00'),
        NumberOfLeave: 1,
        Comment: 'Granted',
        Status: 'Approved',
        Reason: 'Going home'
    },
    {
        ID: 6137,
        User: {
            ID: 12345,
            Name: 'FName Lname'
        },
        Type: ileavetype[2],
        StartDate: new Date('2/1/2017 00:00:00'),
        EndDate: new Date('3/1/2017 00:00:00'),
        NumberOfLeave: 2,
        Comment: 'Granted',
        Status: 'Partially Approved',
        Reason: 'holiday'
    },
    {
        ID: 6522,
        User: {
            ID: 12345,
            Name: 'FName Lname'
        },
        Type: ileavetype[0],
        StartDate: new Date('12/09/2016 00:00:00'),
        EndDate: new Date('12/09/2016 00:00:00'),
        NumberOfLeave: 1,
        Comment: 'Granted',
        Status: 'Approved',
        Reason: 'Birthday'
    }
];

module.exports = ileave;
