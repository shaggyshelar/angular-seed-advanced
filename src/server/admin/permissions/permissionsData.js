// Permissions of users according to userId

var permissions = {
  userPermission: [{
    userId: 10, //Admin
    Permissions: [
      'REPORTS.READ',
      'ANALYTICS.READ',
      'EXPORT.READ',
      'AUTH.LOGIN',
      'AUTH.LOGOUT',
      'ADMIN.USER.MANAGE',
      'USER.CREATE',
      'USER.READ',
      'USER.UPDATE',
      'USER.DELETE',
      'FEATURE.DELETE',
      'FEATURE.CREATE',
      'FEATURE.READ',
      'FEATURE.UPDATE',

      'DASHBOARD.READ',

      // PROFILE Menus
      'PROFILE.MANAGE',
      'PROFILE.ALLPROFILES.READ',
      'PROFILE.BALCKLISTEDPROFILES.READ',
      'PROFILE.RECENTPROFILES.READ',
      'PROFILE.MYPROFILES.READ',

      // RRF Menus
      'RRF.MANAGE',
      'RRF.MYRRF.READ',
      'RRF.RRFAPPROVAL.READ',
      'RRF.RRFDASHBOARD.READ',

      // RCIC Menus
      'RCIC.MANAGE',
      'RCIC.INTERVIEWERCALENDER.READ',
      'RCIC.MYCALENDER.READ',
      'RCIC.SCHEDULEINTERVIEW.READ',
      'RCIC.IEF.READ',

      // Administrator Menus
      'ADMIN.MANAGE',
      'ADMIN.ROLE.READ',
      'ADMIN.FEATURE.READ',
      'ADMIN.PERMISSION.MANAGE',
      'ADMIN.THEMEPANEL.MANAGE',
      'ADMIN.PRACTICE.MANAGE',
      'ADMIN.USER.MANAGE',
      'ADMIN.TECHNOLOGY.MANAGE',
      'ADMIN.SKILLS.MANAGE',
      'ADMIN.QUALIFICATIONS.MANAGE',
      'ADMIN.DESIGNATION.MANAGE',
      'ADMIN.INTERVIEWROUNDS.MANAGE',
      'ADMIN.OWNERTYPE.MANAGE'
    ]
  }, {
    userId: 11,
    Permissions: [
      'ANALYTICS.READ',
      'AUTH.LOGIN',
      'AUTH.LOGOUT',
      'USER.READ',
      'FEATURE.READ',
      'DASHBOARD.READ',

      'PROFILE.MANAGE',
      'PROFILE.ALLPROFILES.READ',
      'PROFILE.MYPROFILES.READ',

      'RCIC.MANAGE',
      'RCIC.INTERVIEWERCALENDER.READ',
      'RCIC.MYCALENDER.READ',
      'RCIC.SCHEDULEINTERVIEW.READ',
      'RCIC.IEF.READ',
    ]
  }, {
    userId: 12,
    Permissions: [
      'EXPORT.READ',
      'AUTH.LOGIN',
      'AUTH.LOGOUT',
      'USER.READ',
      'FEATURE.CREATE',
      'DASHBOARD.READ',

      'RRF.MANAGE',
      'RRF.MYRRF.READ',
      'RRF.RRFDASHBOARD.READ',

      'RCIC.MANAGE',
      'RCIC.SCHEDULEINTERVIEW.READ',
      'RCIC.IEF.READ',
    ]
  }, {
    userId: 13,
    Permissions: [
      'ANALYTICS.READ',
      'EXPORT.READ',
      'AUTH.LOGIN',
      'AUTH.LOGOUT',
      'USER.READ',
      'USER.UPDATE',
      'DASHBOARD.READ',

      'PROFILE.MANAGE',
      'PROFILE.ALLPROFILES.READ',
      'PROFILE.MYPROFILES.READ',

      'RRF.MANAGE',
      'RRF.MYRRF.READ',
      'RRF.RRFDASHBOARD.READ',

      'RCIC.MANAGE',
      'RCIC.SCHEDULEINTERVIEW.READ',
      'RCIC.IEF.READ',
    ]
  }]
}

permissions.permissionsList = [{
  Id: 1,
  Key: 'DASHBOARD.READ',
  Text: 'Can read Dasboard'
}, {
  Id: 2,
  Key: 'CORPORATE.MANAGE',
  Text: 'Can manage Corporate'
}, {
  Id: 3,
  Key: 'CONFERENCE_BOOKING.READ',
  Text: 'Can read Conference booking'
}, {
  Id: 4,
  Key: 'TICKET.READ',
  Text: 'Can read log a Ticket'
}, {
  Id: 5,
  Key: 'TIMESHEET.READ',
  Text: 'Can read Timesheet'
}, {
  Id: 6,
  Key: 'ADMIN.MANAGE',
  Text: 'Can manage Admin'
}, {
  Id: 7,
  Key: 'LEAVE.MANAGE',
  Text: 'Can manage Leave'
}, {
  Id: 8,
  Key: 'ROLE.READ',
  Text: 'Can read Role'
}, {
  Id: 9,
  Key: 'Holiday.READ',
  Text: 'Can read Holiday'
}, {
  Id: 10,
  Key: 'BulkLeaveApproval.READ',
  Text: 'Can read BulkLeaveApproval'
}, ]
module.exports = permissions;
