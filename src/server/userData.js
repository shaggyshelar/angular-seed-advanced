var users = [
    {
        Id: 10,
        UserName: 'admin',
        Password: 'password',
        Permissions: [
            'Timesheet.READ', 'Timesheet.CREATE', 'Timesheet.UPDATE', 'Timesheet.DELETE',
            'CORPORATE.MANAGE','CONFERENCE_BOOK.READ', 'CONFERENCE_BOOK.CREATE', 'CONFERENCE_BOOK.UPDATE', 'CONFERENCE_BOOK.DELETE',
            'LEAVE.READ', 'LEAVE.CREATE', 'LEAVE.UPDATE', 'LEAVE.DELETE', 'LEAVE.MANAGE',
            'HOLIDAY.READ', 'HOLIDAY.CREATE', 'HOLIDAY.UPDATE', 'HOLIDAY.DELETE', 'HOLIDAY.MANAGE',
            'ADMIN.MANAGE','FEATURE.READ','ROLE.READ','ROLE.CREATE','ROLE.UPDATE',
            'PASSWORD.CREATE','PASSWORD.READ','PASSWORD.UPDATE','PASSWORD.DELETE','PROFILE.READ', 'PROFILE.UPDATE', 'PROFILE.MANAGE'
        ]
    },
    {
        Id: 11,
        UserName: 'user1',
        Password: 'password',
        Permissions: ['LEAVE.READ', 'LEAVE.CREATE', 'LEAVE.UPDATE', 'LEAVE.DELETE']
    },
    {
        Id: 12,
        UserName: 'user2',
        Password: 'password',
        Permissions: ['HOLIDAY.READ', 'HOLIDAY.CREATE', 'HOLIDAY.UPDATE', 'HOLIDAY.DELETE',]
    },
    {
        Id: 13,
        UserName: 'user3',
        Password: 'password',
        Permissions: ['CORPORATE.MANAGE', 'CONFERENCE_BOOK.READ', 'CONFERENCE_BOOK.CREATE', 'CONFERENCE_BOOK.UPDATE', 'CONFERENCE_BOOK.DELETE']
    },

    {
        Id: 14,
        UserName: 'user4',
        Password: 'password',
        Permissions: ['LEAVE.READ', 'HOLIDAY.READ', 'LEAVE.CREATE']
    },
    {
        Id: 15,
        UserName: 'user5',
        Password: 'password',
        Permissions: ['LEAVE.READ', 'LEAVE.CREATE']
    },
    {
        Id: 16,
        UserName: 'user6',
        Password: 'password',
        Permissions: ['LEAVE.READ', 'LEAVE.UPDATE']
    },
    {
        Id: 17,
        UserName: 'user7',
        Password: 'password',
        Permissions: ['LEAVE.READ', 'HOLIDAY.READ']
    },
    {
        Id: 18,
        UserName: 'user8',
        Password: 'password',
        Permissions: ['Timesheet.READ', 'Timesheet.CREATE', 'Timesheet.UPDATE', 'Timesheet.DELETE']
    },
    {
        Id: 19,
        UserName: 'user9',
        Password: 'password',
        Permissions: ['LEAVE.READ', 'LEAVE.CREATE', 'Timesheet.READ', 'Timesheet.CREATE']
    }
];
module.exports = users;