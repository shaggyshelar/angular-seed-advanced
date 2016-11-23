// List of hardcoded users along with their details.
var roles = {
    roleList: [{
        id: 1,
        name: 'SuperAdmin',
        Permissions: [
            {
                id: 1,
                Key: 'DASHBOARD.READ',
                Text: 'Can read Dasboard'
            },
            {
                id: 2,
                Key: 'PROFILE.MANAGE',
                Text: 'Can manage Profile'
            },
            {
                id: 3,
                Key: 'PROFILE.ALLPROFILES.READ',
                Text: 'Can read ALL Profile'
            }]
    },
    {
        id: 2,
        name: 'Management Team',
        Permissions: [
            {
                id: 5,
                Key: 'PROFILE.RECENTPROFILES.READ',
                Text: 'Can read Recent Profile'
            },
            {
                id: 6,
                Key: 'PROFILE.MYPROFILES.READ',
                Text: 'Can read My Profile'
            },
            {
                id: 7,
                Key: 'RRF.MANAGE',
                Text: 'Can manage RRF'
            }]
    },
    {
        id: 3,
        name: 'Recruitment Head',
        Permissions: [
            {
                id: 7,
                Key: 'RRF.MANAGE',
                Text: 'Can manage RRF'
            },
            {
                id: 8,
                Key: 'RRF.MYRRF.READ',
                Text: 'Can read MY RRF '
            },
            {
                id: 9,
                Key: 'RRF.RRFAPPROVAL.READ',
                Text: 'Can read RRF Approval'
            }]
    },
    {
        id: 4,
        name: 'Delivery Manager',
        Permissions: [
            {
                id: 5,
                Key: 'PROFILE.RECENTPROFILES.READ',
                Text: 'Can read Recent Profile'
            },
            {
                id: 6,
                Key: 'PROFILE.MYPROFILES.READ',
                Text: 'Can read My Profile'
            },
            {
                id: 7,
                Key: 'RRF.MANAGE',
                Text: 'Can manage RRF'
            }]
    },
    {
        id: 5,
        name: 'Project Manager',
        Permissions: [
            {
                id: 5,
                Key: 'PROFILE.RECENTPROFILES.READ',
                Text: 'Can read Recent Profile'
            },
            {
                id: 6,
                Key: 'PROFILE.MYPROFILES.READ',
                Text: 'Can read My Profile'
            },
            {
                id: 7,
                Key: 'RRF.MANAGE',
                Text: 'Can manage RRF'
            }]
    },
    {
        id: 6,
        name: 'HR Team',
        Permissions: [
            {
                id: 5,
                Key: 'PROFILE.RECENTPROFILES.READ',
                Text: 'Can read Recent Profile'
            },
            {
                id: 6,
                Key: 'PROFILE.MYPROFILES.READ',
                Text: 'Can read My Profile'
            },
            {
                id: 7,
                Key: 'RRF.MANAGE',
                Text: 'Can manage RRF'
            }]
    },
    {
        id: 7,
        name: 'HR Head',
        Permissions: [
            {
                id: 5,
                Key: 'PROFILE.RECENTPROFILES.READ',
                Text: 'Can read Recent Profile'
            },
            {
                id: 6,
                Key: 'PROFILE.MYPROFILES.READ',
                Text: 'Can read My Profile'
            },
            {
                id: 7,
                Key: 'RRF.MANAGE',
                Text: 'Can manage RRF'
            }]
    },
    {
        id: 8,
        name: 'ESPL Employees',
        Permissions: [
            {
                id: 5,
                Key: 'PROFILE.RECENTPROFILES.READ',
                Text: 'Can read Recent Profile'
            },
            {
                id: 6,
                Key: 'PROFILE.MYPROFILES.READ',
                Text: 'Can read My Profile'
            },
            {
                id: 7,
                Key: 'RRF.MANAGE',
                Text: 'Can manage RRF'
            }]
    }],
    ids: 8
};
module.exports = roles;