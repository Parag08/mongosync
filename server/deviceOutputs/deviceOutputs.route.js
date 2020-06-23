const express = require('express');
const deviceLogsCtrl = require('./deviceOutputs.controller');

const router = express.Router(); // eslint-disable-line new-cap

// get list of all collections
router.route('/:macAddress').post(deviceLogsCtrl.send);

module.exports = router;
