const express = require('express');
const collectionCtrl = require('./collection.controller');

const router = express.Router(); // eslint-disable-line new-cap

// get list of all collections
router.route('/').get(collectionCtrl.list);
router.route('/:CollectionName').post(collectionCtrl.create).delete(collectionCtrl.remove);

module.exports = router;
