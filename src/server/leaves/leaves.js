var utils = require('../utils');
var leaves = require('./leavesData');
var _ = require('lodash');

// var getLeaves = function (req, res) {
//     res.json(leaves.leavesList);
// };

// var addLeaves = function (req, res) {
//     var leaves = req.body;
//     leaves.id = ++leaves.ids;
//     leaves.leavesList.splice(index, 1);
//     res.json(leaves);
// };

// var getLeaveById = function (req, res) {
//     var leaveID = parseInt(req.body.id);
//     var index = _.findIndex(leaves.leavesList, { id: leaveID });
//     res.json(leaves.leavesList[index]);
// };

// module.exports = function (app) {
//     app.get('/api/leaves', utils.EnsureAuthenticated, getLeaves);
//     app.post('/api/leaves/GetLeaveById', utils.EnsureAuthenticated,  getLeaveById);
//     app.post('/api/leaves/Add', utils.EnsureAuthenticated, addLeaves);
//     // app.post('/api/Feature/Delete', utils.EnsureAuthenticated, deleteFeature);
//     // app.post('/api/Feature/Edit', utils.EnsureAuthenticated, editFeature);
// };

module.exports = function (app) {
    app.get('/api/leaves', function (req, res) {
        res.json(leaves.leavesList);
    });
}
