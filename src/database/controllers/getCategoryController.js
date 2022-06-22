const { getAllCategories } = require('../services/categoryService');

module.exports = async (req, res) => {
  const categories = await getAllCategories();
  return res.status(200).json(categories);
};
