const { User } = require('../models');

const getUser = async (email) => {
  const user = await User.findOne({
    attributes: ['email'],
    where: { email },
  });
  return user;
};

const createUser = async ({ 
  displayName,
  email,
  password,
  image,
}) => 
  User.create({
    displayName,
    email,
    password,
    image,
  });

// const checkUniqueEmail = async (email) => {
//   const uniqueEmail = await User.findOne({
//     attributes: ['email'],
//     where: { email },
//   });
//   // return uniqueEmail.length;
//   if (uniqueEmail) {
//     const errorMessage = { status: 409, message: 'User already registered' };
//     throw errorMessage;
//   }
// };

module.exports = { createUser, getUser };
