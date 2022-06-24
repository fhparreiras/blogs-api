const { getPostById } = require('../services/postService');

module.exports = async (req, res) => {
  const { id } = req.params;
  const blogPost = await getPostById(id);
  return res.status(200).json(blogPost);
};
