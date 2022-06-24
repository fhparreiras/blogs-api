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

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    const errorMessage = { status: 404, message: 'User does not exist' };
    throw errorMessage;
  }
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

const deleteUserMe = async (myId) => {
  await User.destroy({ where: { id: myId } });
};

module.exports = { createUser, deleteUserMe, getAllUsers, getUser, getUserById };
