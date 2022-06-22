// const jwt = require('jsonwebtoken');
const { generateJWT } = require('../../utils/JWTToken');
// const { User } = require('../models');
const getUser = require('../services/loginService');

// const secret = process.env.JWT_SECRET;

const validateBody = (body, res) => {
  const { email, password } = body;

  if (!email || !password) {
    res
      .status(400)
      .json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    if (!validateBody(req.body, res)) return;

    // const user = await User.findOne({ where: { email } });
    const user = await getUser(email);
  
    if (!user || user.password !== password) {
      return res
        .status(400)
        .json({ message: 'Invalid fields' });
    }
    // const token = jwt.sign({ data: user }, secret);
    const token = generateJWT(user.dataValues);
    res.status(200).json({ token });
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};
