const { createCategory, getCategory } = require('../services/categoryService');

module.exports = async (req, res) => {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  }
  console.log('NAME DO CATEGORY: ', name);
  await createCategory(name);
  const categoryData = await getCategory(name);
  return res.status(201).json(categoryData);
};
