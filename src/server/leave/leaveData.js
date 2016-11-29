// List of hardcoded features along with their details.
var leaves = {
    leaveLst: [
        {
            user: {
                id: 10431,
                name: 'Mukul Tilak'
            },
            type: {
                id: 1,
                title: 'Leave'
            },
            startDate: '1/12/2016 00:00:00',
            endDate: '3/12/2016 00:00:00',
            numberOfLeave: 3,
            status: 'Approved',
            reason: 'Ill health',
            projects:[
                {
                    title: 'HRMS',
                    manager: 'Sagar Shelar'
                },
                {
                    title: 'EBS Practice',
                    manager: 'Kunal Adhikari'
                }
            ],
            approved:[
                'Sagar Shelar'
            ],
            pending:[
                'Kunal Adhikari'
            ]
        },
        {
            user: {
                id: 10431,
                name: 'Mukul Tilak'
            },
            type: {
                id: 1,
                title: 'Leave'
            },
            startDate: '31/12/2016 00:00:00',
            endDate: '31/12/2016 00:00:00',
            numberOfLeave: 1,
            status: 'Approved',
            reason: 'Party',
            projects:[
                {
                    title: 'HRMS',
                    manager: 'Sagar Shelar'
                },
                {
                    title: 'EBS Practice',
                    manager: 'Kunal Adhikari'
                }
            ],
            approved:[
                'Sagar Shelar'
            ],
            pending:[
                'Kunal Adhikari'
            ]
        },
        {
            user: {
                id: 10431,
                name: 'Mukul Tilak'
            },
            type: {
                id: 1,
                title: 'Leave'
            },
            startDate: '1/2/2017 00:00:00',
            endDate: '5/2/2017 00:00:00',
            numberOfLeave: 5,
            status: 'Pending',
            reason: 'Road Trip',
            projects:[
                {
                    title: 'HRMS',
                    manager: 'Sagar Shelar'
                },
                {
                    title: 'EBS Practice',
                    manager: 'Kunal Adhikari'
                }
            ],
            approved:[
                'Sagar Shelar'
            ],
            pending:[
                'Kunal Adhikari'
            ]
        },
    ],
    numberOfLeave:3,
    halfDayLeave:6,
    absent:0,
    halfDayAbsent:0
};

module.exports = leaves;