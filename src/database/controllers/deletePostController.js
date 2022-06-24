const { decodeToken } = require('../../utils/JWTToken');
const { deletePost } = require('../services/postService');

module.exports = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const decodedToken = decodeToken(token);
  const userId = decodedToken.id;
  await deletePost(id, userId);
  return res.status(204).json();
};
