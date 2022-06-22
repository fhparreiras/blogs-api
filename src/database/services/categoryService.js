const { Category } = require('../models');

const getCategory = async (name) => (Category.findOne({ where: { name } }));

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const createCategory = async (name) => Category.create({ name });

module.exports = { createCategory, getAllCategories, getCategory };
