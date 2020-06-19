const mongoose = require('mongoose');
const logger = require('../../config/winston');

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  mongoose.connection.db.collection(req.params.CollectionName, (err, collection) => {
    if (err) {
      next(err);
    } else {
      const { limit = 50, skip = 0 } = req.query;
      collection.find({ limit, skip }).toArray((errNew, data) => {
        if (errNew) {
          next(errNew);
        } else {
          logger.info('found data');
          res.json(data);
        }
      });
    }
  });
}

module.exports = { list };
