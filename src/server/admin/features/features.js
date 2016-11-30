var utils = require('../../utils');
var features = require('./../features/featuresData');
var _ = require('lodash');

var getFeatures = function (req, res) {
  res.json(features.featuresList);
};

var addFeature = function (req, res) {
  var feature = req.body;
  feature.id = ++features.ids;
  features.featuresList.push(feature);
  res.json(features.featuresList);
};

var deleteFeature = function (req, res) {
  var featureID =  parseInt(req.params.id);
  var index = _.findIndex(features.featuresList, {
    id: featureID
  });
  features.featuresList.splice(index, 1)
  res.json(features.featuresList);
};

var getFeatureById = function (req, res) {
  var featureID = parseInt(req.params.id);
  var index = _.findIndex(features.featuresList, {
    id: featureID
  });
  res.json(features.featuresList[index]);
};

var editFeature = function (req, res) {
  var feature = req.body;
  var index = _.findIndex(features.featuresList, {
    id: feature.id
  });
  features.featuresList[index] = feature
  res.json(features.featuresList);
};

module.exports = function (app) {
  app.get('/api/feature', utils.EnsureAuthenticated, getFeatures);
  app.get('/api/feature/:id', utils.EnsureAuthenticated, getFeatureById);
  app.post('/api/feature', utils.EnsureAuthenticated, addFeature);
  app.delete('/api/feature/:id', utils.EnsureAuthenticated, deleteFeature);
  app.put('/api/feature', utils.EnsureAuthenticated, editFeature);
};
