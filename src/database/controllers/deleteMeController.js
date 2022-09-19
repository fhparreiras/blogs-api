const { decodeToken } = require('../../utils/JWTToken');
const { deleteUserMe } = require('../services/userService');

module.exports = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = decodeToken(token);
  const myId = decodedToken.id;
  await deleteUserMe(myId);
  return res.status(204).json({ message: 'Usuário deletado' });
};
