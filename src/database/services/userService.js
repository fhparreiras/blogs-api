const { User } = require('../models');

const getUser = async (email) => {
  const user = await User.findOne({
    attributes: ['email'],
    where: { email },
  });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
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

module.exports = { createUser, getAllUsers, getUser };
