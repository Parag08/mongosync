const { Client } = require('azure-iothub');
const logger = require('../../config/winston');
const config = require('../../config/config');

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
async function send(req, res, next) {
  if (req.params.macAddress == null) {
    logger.error('Mac address not provided');
    next(new Error('Mac address not provided'));
  } else {
    const serviceClient = Client.fromConnectionString(config.iotHubConnectionString);
    const targetDevice = req.params.macAddress;
    logger.info(req.params.macAddress);
    logger.info(config.iotHubConnectionString);
    try {
      await serviceClient.open();
      const message = await serviceClient.send(targetDevice, req.body.message);
      await serviceClient.close();
      res.json({ message });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { send };
