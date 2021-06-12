const express = require('express');
const router = express.Router();

const BackOfficeController = require('./back-office/BackOfficeController');
const WebAppController = require('./web-app/WebAppController');

router.get('/inventory/:trainId', WebAppController.searchInventory);

router.post('/interest_item', BackOfficeController.addInterestItem);
router.post('/social_content', BackOfficeController.addSocialContent);
router.get('/train_stop', BackOfficeController.searchTrainStops);
router.post('/train_stop', BackOfficeController.addTrainStop);
router.get('/train_stop/:id', BackOfficeController.getTrainStop);

module.exports = router;