const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

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

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!validateBody(req.body, res)) return;

    const user = await User.findOne({ where: { email } });
  
    if (!user || user.password !== password) {
      return res
        .status(400)
        .json({ message: 'Invalid fields' });
    }
    const token = jwt.sign({ data: user }, secret);
    return res.status(200).json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};
