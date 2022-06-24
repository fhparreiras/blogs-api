const category = require('./database/controllers/categoryController');
const getCategory = require('./database/controllers/getCategoryController');
const getPost = require('./database/controllers/getPostController');
const getPostById = require('./database/controllers/getPostByIdController');
const getUser = require('./database/controllers/getUserController');
const getUserById = require('./database/controllers/getByIdController');
const login = require('./database/controllers/loginController');
const post = require('./database/controllers/postController');
const user = require('./database/controllers/userController');

module.exports = {
  category,
  getCategory,
  getPost,
  getPostById,
  getUser,
  getUserById,
  login,
  post,
  user,
};
