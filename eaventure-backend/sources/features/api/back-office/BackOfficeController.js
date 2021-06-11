const { Keystone } = require('@keystonejs/keystone');
const { BackOffice } = require('../back-office/BackOfficeService');
const { utils } = require('../../../utils/writer');

module.exports.addInterestItem = function(req, res) {
  BackOffice.addInterestItem(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
  
module.exports.addSocialContent = function(req, res) {
  BackOffice.addSocialContent(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
  
module.exports.addTrainStop = function(req, res) {
  BackOffice.addTrainStop(req.body)
  .then(function (response) {
      utils.writeJson(res, response);
  })
  .catch(function (response) {
      utils.writeJson(res, response);
  });
};
  
module.exports.getTrainStop = function(req, res) {
  BackOffice.getTrainStop(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
  
module.exports.searchTrainStops = function(req, res) {
  BackOffice.searchTrainStops(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
