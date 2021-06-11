const { Keystone } = require('@keystonejs/keystone');
const { WebApp } = require('../web-app/WebAppService');
const { utils } = require('../../../utils/writer');

module.exports.searchInventory = function(req, res) {
  WebApp.searchInventory(req.params.trainId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};