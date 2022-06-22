const category = require('./database/controllers/categoryController');
const login = require('./database/controllers/loginController');
const user = require('./database/controllers/userController');
const getUser = require('./database/controllers/getUserController');
const getUserById = require('./database/controllers/getByIdController');

module.exports = {
  category,
  getUser,
  getUserById,
  login,
  user,
};
