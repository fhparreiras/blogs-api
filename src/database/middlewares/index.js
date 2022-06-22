const authenticationMiddleware = require('./auth');
const checkEmailFormat = require('./checkEmailFormat');
const errorHandler = require('./errorHandler');
const validateUniqueEmail = require('./validateUniqueEmail');

module.exports = {
  authenticationMiddleware,
  checkEmailFormat,
  errorHandler,
  validateUniqueEmail,
};
