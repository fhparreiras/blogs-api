const { getAllUsers } = require('../services/userService');

module.exports = async (req, res) => {
  const users = await getAllUsers();
  // console.log('USERS NO GETALL: ', users);
    return res.status(200).json(users);
};
