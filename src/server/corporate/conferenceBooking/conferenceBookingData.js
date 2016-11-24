var moment = require('moment');

// List of hardcoded ConferenceBookingEvents along with their details.

var conferenceBooking = {
    conferenceBookingList:[
            {
                 id:1,
                'title': 'Inteview',
                'start': moment().add(2, 'hours'),
                'end': moment().add(4, 'hours'),
                'color': '#8877A9',
                'conference': 'Caribbean'
            },
            {
                 id:2,
                'title': 'Jenzabar Client call',
                'start': moment(),
                'end': moment().add(3, 'hours'),
                'color': '#3FABA4',
                'conference': 'Dubai'
            },
            {
                 id:3,
                'title': 'Product Meeting',
                'start': moment().subtract(3, 'hours'),
                'end': moment().subtract(1, 'hours'),
                'color': '#FF9655',
                'conference': 'Hong Kong'
            },
            {
                 id:4,
                'title': 'Tccc client call',
                'start': moment().subtract(3, 'hours'),
                'end': moment().subtract(2, 'hours'),
                'color': '#3FABA4',
                'conference': 'Dubai'
            },
            {
                 id:5,
                'title': 'Standup Meeting',
                'start': moment().add(1, 'd').subtract(3, 'hours'),
                'end': moment().add(1, 'd').subtract(1, 'hours'),
                'color': '#E7C5F5',
                'conference': 'Bahamas'
            },
            {
                 id:6,
                'title': 'NGO/NPO Meeting',
                'start': moment().add(1, 'd').subtract(3, 'hours'),
                'end': moment().add(1, 'd').subtract(2, 'hours'),
                'color': '#8877A9',
                'conference': 'Caribbean'
            },
            {
                 id:7,
                'title': 'Conference',
                'start': moment().subtract(1, 'd').subtract(3, 'hours'),
                'end': moment().subtract(1, 'd').subtract(2, 'hours'),
                'color': '#D05454',
                'conference': 'Barcelona'
            },
            {
                 id:8,
                'title': 'Interview',
                'start': moment().subtract(1, 'd'),
                'end': moment().subtract(1, 'd').add(3, 'hours'),
                'color': '#DFBA49',
                'conference': 'Trainning Room'
            }
        ],
    ids: 8
};

module.exports = conferenceBooking;