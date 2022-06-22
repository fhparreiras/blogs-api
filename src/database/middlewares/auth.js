const { validateToken } = require('../../utils/JWTToken');

const authenticationMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  const payload = await validateToken(token);
  if (!payload) {
    const errorMessage = { status: 401, message: 'Token inválido' };
    throw errorMessage;
  }
  res.locals.payload = payload;
  next();
};

module.exports = authenticationMiddleware;
