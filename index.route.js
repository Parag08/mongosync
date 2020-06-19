const express = require('express');

const collectionRoutes = require('./server/collections/collection.route');
const deviceLogRoutes = require('./server/deviceLogs/deviceLogs.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount collections routes at /collections
router.use('/collections', collectionRoutes);

// mount deviceLogs routes at /deviceLogs
router.use('/deviceLogs', deviceLogRoutes);

module.exports = router;
