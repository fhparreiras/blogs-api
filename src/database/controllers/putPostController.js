const { decodeToken } = require('../../utils/JWTToken');
const { updatePost } = require('../services/postService');

module.exports = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const decodedToken = decodeToken(token);
  const userId = decodedToken.id;
  const updatedPost = await updatePost(id, userId, req.body);
  return res.status(200).json(updatedPost);
};
