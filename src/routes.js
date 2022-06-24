const category = require('./database/controllers/categoryController');
const deletePost = require('./database/controllers/deletePostController');
const deleteMe = require('./database/controllers/deleteMeController');
const getCategory = require('./database/controllers/getCategoryController');
const getPost = require('./database/controllers/getPostController');
const getPostById = require('./database/controllers/getPostByIdController');
const getUser = require('./database/controllers/getUserController');
const getUserById = require('./database/controllers/getByIdController');
const login = require('./database/controllers/loginController');
const post = require('./database/controllers/postController');
const putPost = require('./database/controllers/putPostController');
const user = require('./database/controllers/userController');

module.exports = {
  category,
  deleteMe,
  deletePost,
  getCategory,
  getPost,
  getPostById,
  getUser,
  getUserById,
  login,
  post,
  putPost,
  user,
};
