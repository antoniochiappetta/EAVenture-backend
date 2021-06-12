const BackOffice = require('../back-office/BackOfficeService');
const utils = require('../../../utils/writer');

exports.addInterestItem = function addInterestItem (req, res) {
  BackOffice.addInterestItem(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
  
exports.addSocialContent = function addSocialContent (req, res) {
  BackOffice.addSocialContent(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
  
exports.addTrainStop = function addTrainStop (req, res) {
  BackOffice.addTrainStop(req.body)
  .then(function (response) {
      utils.writeJson(res, response);
  })
  .catch(function (response) {
      utils.writeJson(res, response);
  });
};
  
exports.getTrainStop = function getTrainStop (req, res) {
  BackOffice.getTrainStop(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
  
exports.searchTrainStops = function searchTrainStops (req, res) {
  BackOffice.searchTrainStops(req.params.id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
