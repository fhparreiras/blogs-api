const { User } = require('../models');

const checkUniqueEmail = async (email) => {
  const uniqueEmail = await User.findAll({
    where: { email },
  });
  return uniqueEmail.length;
};

const validateUniqueEmail = async (req, res, next) => {
    const { email } = req.body;
    // const uniqueEmail = await User.findAll({
    //   where: { email },
    // });
    // console.log('TESTE DO UNIQUE EMAIL: ', email, uniqueEmail);
    if (await checkUniqueEmail(email) !== 0) {
      const errorMessage = { status: 409, message: 'User already registered' };
      throw errorMessage; 
    }
    next();
};

module.exports = validateUniqueEmail;
