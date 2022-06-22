const login = require('./database/controllers/loginController');
const user = require('./database/controllers/userController');
const getUser = require('./database/controllers/getUserController');
const getUserById = require('./database/controllers/getByIdController');

module.exports = {
  getUser,
  getUserById,
  login,
  user,
};
