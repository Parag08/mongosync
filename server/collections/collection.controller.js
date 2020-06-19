const mongoose = require('mongoose');
const logger = require('../../config/winston');

/**
 * Get user list.
 * @returns {Collection[]}
 */
function list(req, res, next) {
  mongoose.connection.db.listCollections().toArray((err, names) => {
    if (err) {
      next(err);
    } else {
      logger.info('found collections');
      res.json(names);
    }
  });
}

function create(req, res, next) {
  if (req.params.CollectionName == null) {
    next(new Error('collection value not provided'));
  } else {
    mongoose.connection.db.createCollection(req.params.CollectionName).then((resObj) => {
      res.json({ name: resObj.CollectionName });
    }).catch((err) => next(err));
  }
}

function remove(req, res, next) {
  if (req.params.CollectionName == null) {
    next(new Error('collection value not provided'));
  } else {
    mongoose.connection.db.dropCollection(req.params.CollectionName).then((resObj) => {
      res.json({ name: resObj.CollectionName });
    }).catch((err) => next(err));
  }
}

module.exports = { list, create, remove };
