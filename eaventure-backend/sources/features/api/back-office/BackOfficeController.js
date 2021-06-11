const { Keystone } = require('@keystonejs/keystone');
const { BackOffice } = require('../back-office/BackOfficeService');
const { utils } = require('../../../utils/writer');

exports.addInterestItem = function addInterestItem (req, res, next, body) {
    BackOffice.addInterestItem(body)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
  
exports.addSocialContent = function addSocialContent (req, res, next, body) {
    BackOffice.addSocialContent(body)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
  
exports.addTrainStop = function addTrainStop (req, res, next, body) {
    BackOffice.addTrainStop(body)
    .then(function (response) {
        utils.writeJson(res, response);
    })
    .catch(function (response) {
        utils.writeJson(res, response);
    });
  };
  
exports.getTrainStop = function getTrainStop (req, res, next, id) {
    BackOffice.getTrainStop(id)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};
  
  module.exports.searchTrainStops = function searchTrainStops (req, res, next, city) {
    BackOffice.searchTrainStops(city)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
