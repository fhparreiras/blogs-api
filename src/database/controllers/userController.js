const { getUser, createUser } = require('../services/userService');
const { generateJWT } = require('../../utils/JWTToken');

module.exports = async (req, res) => {
    const { displayName, email, password } = req.body;
    if (displayName.length < 8) {
      return res
      .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
    }
    if (password.length < 6) {
      return res
      .status(400).json({ message: '"password" length must be at least 6 characters long' });
    }
    const user = await getUser(email);
    if (user !== null) {
      console.log('USER: ', user);
      return res.status(409).json({ message: 'User already registered' });
    }
    const newUser = await createUser(req.body);
    const token = generateJWT(newUser.dataValues);
    return res.status(201).json({ token });
};
