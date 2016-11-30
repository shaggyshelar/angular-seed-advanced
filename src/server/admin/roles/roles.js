var utils = require('../../utils');
var roles = require('./../roles/rolesData');
var _ = require('lodash');

var getRoles = function (req, res) {
    res.json(roles.roleList);
};

var addRole = function (req, res) {
    var role = req.body.role;
    role.id = ++roles.ids;
    role.Permissions = [];
    roles.roleList.push(role);
    res.json(role);
};

var deleteRole = function (req, res) {
    var role = req.body.role;
    var index = _.findIndex(roles.roleList, role);
    roles.roleList.splice(index, 1)
    res.json(role);
};

var getRoleById = function (req, res) {
    var roleID = parseInt(req.body.role.id);
    var index = _.findIndex(roles.roleList, { id: roleID });
    res.json(roles.roleList[index]);
};

var editRole = function (req, res) {
    var role = req.body.role;
    var index = _.findIndex(roles.roleList, { id: role.id });
    roles.roleList[index] = role
    res.json(role);
};

var getPermissionsByRole = function (req, res) {
    var roleId = parseInt(req.body.roleId);
    var index = _.findIndex(roles.roleList, { id: roleId });
    res.json(roles.roleList[index].Permissions);
};
var addPermissionToRole = function (req, res) {
    var permission = req.body.permission;
    var index = _.findIndex(roles.roleList, { id: parseInt(permission.RoleId) });
    roles.roleList[index].Permissions.push(permission);
    res.json(permission);
};
var revokePermissionFromRole = function (req, res) {
    var permission = req.body.permission;
    var roleindex = _.findIndex(roles.roleList, { id: parseInt(permission.RoleId) });
    var permissionindex = _.findIndex(roles.roleList[roleindex].Permissions, { Text: permission.text });
    roles.roleList[roleindex].Permissions.splice(permissionindex, 1);
    res.json(permission);
};
module.exports = function (app) {
    app.get('/api/Role/GetRoles',  getRoles);
    app.post('/api/Role/GetRoleById',  getRoleById);
    app.post('/api/Role/Add',   addRole);
    app.post('/api/Role/Delete', deleteRole);
    app.post('/api/Role/Edit',  editRole);
    app.post('/api/Role/GetPermissionsByRole', utils.EnsureAuthenticated,  getPermissionsByRole);
    app.post('/api/Role/AddPermissionToRole', utils.EnsureAuthenticated,  addPermissionToRole);
    app.post('/api/Role/RevokePermissionFromRole', utils.EnsureAuthenticated,  revokePermissionFromRole);
};