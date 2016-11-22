var utils = require('../utils');
var features = require('./../features/featuresData');
var _ = require('lodash');

var getFeatures = function (req, res) {
    res.json(features.featuresList);
};

var addFeature = function (req, res) {
    var feature = req.body;
    feature.id = ++features.ids;
    features.featuresList.push(feature);
    res.json(feature);
};

var deleteFeature = function (req, res) {
    var feature = req.body;
    var index = _.findIndex(features.featuresList, feature);
    features.featuresList.splice(index, 1)
    res.json(feature);
};

var getFeatureById = function (req, res) {
    var featureID = parseInt(req.body.id);
    var index = _.findIndex(features.featuresList, { id: featureID });
    res.json(features.featuresList[index]);
};

var editFeature = function (req, res) {
    var feature = req.body;
    var index = _.findIndex(features.featuresList, { id: feature.id });
    features.featuresList[index] = feature
    res.json(feature);
};

module.exports = function (app) {
    app.get('/api/Feature/GetFeatures', utils.EnsureAuthenticated, getFeatures);
    app.post('/api/Feature/GetFeatureById', utils.EnsureAuthenticated,  getFeatureById);
    app.post('/api/Feature/Add', utils.EnsureAuthenticated, addFeature);
    app.post('/api/Feature/Delete', utils.EnsureAuthenticated, deleteFeature);
    app.post('/api/Feature/Edit', utils.EnsureAuthenticated, editFeature);
};
