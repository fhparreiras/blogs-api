const { getAllPosts } = require('../services/postService');

module.exports = async (req, res) => {
  const blogPosts = await getAllPosts();
  return res.status(200).json(blogPosts);
};
