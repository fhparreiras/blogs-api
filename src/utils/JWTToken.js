const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '4d',
  algorithm: 'HS256',
};

const generateJWT = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const validateToken = async (token) => {
  if (!token) {
    const errorMessage = { status: 401, message: 'Token not found' };
    throw errorMessage;
  }
  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (e) {
    const errorMessage = { status: 401, message: 'Expired or invalid token' };
    throw errorMessage;
  }
};

module.exports = {
  generateJWT,
  validateToken,
};
