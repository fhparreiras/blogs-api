const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWT = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const validateToken = async (token) => {
  if (!token) {
    const errorMessage = { status: 401, message: 'Token is missing' };
    throw errorMessage;
  }
  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (e) {
    const errorMessage = { status: 401, message: 'Invalid token' };
    throw errorMessage;
  }
};

module.exports = {
  generateJWT,
  validateToken,
};
