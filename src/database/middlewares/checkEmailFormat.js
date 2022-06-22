const emailFormat = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!regex.test(email)) {
    console.log('ENTROU NO REGEX DO EMAIL', regex.test(email));
    const errorMessage = { status: 400, message: '"email" must be a valid email' };
    throw errorMessage; 
  }
  next();
};

module.exports = emailFormat;
