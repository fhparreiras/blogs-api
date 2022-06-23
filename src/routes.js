const category = require('./database/controllers/categoryController');
const getCategory = require('./database/controllers/getCategoryController');
const getUser = require('./database/controllers/getUserController');
const getUserById = require('./database/controllers/getByIdController');
const login = require('./database/controllers/loginController');
const post = require('./database/controllers/postController');
const user = require('./database/controllers/userController');

module.exports = {
  category,
  getCategory,
  getUser,
  getUserById,
  login,
  post,
  user,
};
