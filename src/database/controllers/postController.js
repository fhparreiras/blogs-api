const { decodeToken } = require('../../utils/JWTToken');
const { categoryExists, createPost } = require('../services/postService');

module.exports = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  if (title === '' || content === '' || categoryIds === []) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  await categoryExists(categoryIds);
  const token = req.headers.authorization;
  const decodedToken = decodeToken(token);
  const userId = decodedToken.id;
  const blogPost = await createPost(title, content, userId, categoryIds);
  return res.status(201).json(blogPost);
};
