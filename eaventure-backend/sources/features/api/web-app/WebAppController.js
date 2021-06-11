const { Keystone } = require('@keystonejs/keystone');
const { WebApp } = require('../web-app/WebAppService');
const { utils } = require('../../../utils/writer');

module.exports.searchInventory = function searchInventory (req, res, next, trainId) {
  WebApp.searchInventory(trainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};