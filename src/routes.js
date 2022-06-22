const login = require('./database/controllers/loginController');
const user = require('./database/controllers/userController');
const getUser = require('./database/controllers/getUserController');

module.exports = {
  getUser,
  login,
  user,
};
