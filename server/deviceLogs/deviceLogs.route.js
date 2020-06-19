const express = require('express');
const deviceLogsCtrl = require('./deviceLogs.controller');

const router = express.Router(); // eslint-disable-line new-cap

// get list of all collections
router.route('/:CollectionName').get(deviceLogsCtrl.list);

module.exports = router;
