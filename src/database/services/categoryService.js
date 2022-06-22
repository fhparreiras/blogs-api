const { Category } = require('../models');

const getCategory = async (name) => (Category.findOne({ where: { name } }));

const createCategory = async (name) => Category.create({ name });

module.exports = { createCategory, getCategory };
