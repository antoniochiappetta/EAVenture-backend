const WebApp = require('../web-app/WebAppService');
const utils = require('../../../utils/writer');

exports.searchInventory = function searchInventory (req, res) {
  WebApp.searchInventory(req.params.trainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};