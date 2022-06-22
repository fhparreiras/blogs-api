const { getUserById } = require('../services/userService');

module.exports = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  return res.status(200).json(user);
};
